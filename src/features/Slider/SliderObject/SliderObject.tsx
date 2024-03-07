import { SwiperSlide, Swiper } from "swiper/react";
import { FC, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useGetEstateById } from "@/shared/api/hooks";
import styles from "./SliderObject.module.scss";

export const SliderObject: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = useRef<any>(null);
  const { id } = useParams();
  const { data, isLoading } = useGetEstateById(id);
  const estate = data?.estate;

  useEffect(() => {
    if (!isMobile && sliderRef.current && carouselRef.current) {
      sliderRef.current.slideTo(activeSlide);
      carouselRef.current.slideTo(activeSlide);
    }
  }, [activeSlide, isMobile]);

  return (
    <>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          <Swiper
            onSwiper={(swiper) => (sliderRef.current = swiper)}
            navigation
            className={styles.slider}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            onActiveIndexChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          >
            {estate &&
              estate.images.map((image) => {
                return (
                  <SwiperSlide key={image}>
                    <img
                      className={styles.sliderImg}
                      src={image}
                      alt="Cities"
                      loading="eager"
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>

          {!isMobile && (
            <Swiper
              onSwiper={(swiper) => (carouselRef.current = swiper)}
              className={styles.carousel}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView="auto"
              spaceBetween={10}
              initialSlide={activeSlide}
            >
              {estate &&
                estate.images.map((image, index) => {
                  return (
                    <SwiperSlide
                      className={styles.carouselSlide}
                      key={image}
                      onClick={() => setActiveSlide(index)}
                    >
                      <img
                        className={clsx(
                          styles.carouselImg,
                          index === activeSlide && styles.activeSlideImage
                        )}
                        src={image}
                        alt="Cities"
                        loading="eager"
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          )}
        </div>
      )}
    </>
  );
};
