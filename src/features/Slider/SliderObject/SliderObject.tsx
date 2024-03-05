import { SwiperSlide, Swiper } from "swiper/react";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Section } from "@/features";
import { Button, Typography } from "@/shared/ui";
import { ModalContext } from "@/app/providers/Context";
import { useGetEstateById } from "@/shared/api/hooks";
import styles from "./SliderObject.module.scss";

export const SliderObject: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = useRef<any>(null);
  const { downloadCatalog } = useContext(ModalContext);
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
    <Section title={isLoading ? "" : estate?.project.name} container>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <>
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

          <div className={styles.text}>
            <Typography variant="body" weight="medium" color="white">
              {estate?.description}
            </Typography>
          </div>
          <div className={styles.description}>
            <div>
              <div className={styles.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  {`${estate?.city}, ${estate?.project.name}`}
                </Typography>
              </div>
              <div className={styles.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  Furnished:
                  {estate?.project.is_furnished ? (
                    <span> yes</span>
                  ) : (
                    <span> no</span>
                  )}
                </Typography>
              </div>
            </div>
            <div>
              <div className={styles.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  Type: {estate?.estate_type}
                </Typography>
              </div>

              <div className={styles.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  Area: {estate?.area}
                </Typography>
              </div>
            </div>
            <div>
              <div className={styles.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  Completion: {estate?.project.completion}
                </Typography>
              </div>
              <div className={styles.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  Is secondary:{" "}
                  {estate?.is_secondary ? <span>yes</span> : <span>no</span>}{" "}
                </Typography>
              </div>
            </div>
          </div>

          <div className={styles.priceRow}>
            <Typography variant="h2" color="gold" weight="bold">
              Price at: {estate?.price_usd} USD
            </Typography>

            <div className={styles.buttons}>
              <Button
                customClasses={styles.priceBtnsItem}
                onClick={downloadCatalog}
                type="primary"
              >
                Catalog
              </Button>
              <Button customClasses={styles.priceBtnsItem} type="primary">
                WhatsApp
              </Button>
            </div>
          </div>
        </>
      )}
    </Section>
  );
};
