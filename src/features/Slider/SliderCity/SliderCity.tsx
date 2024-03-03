import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "@/features";
import { useGetCities } from "@/shared/api/hooks";
import "swiper/scss";
import "swiper/scss/navigation";
import style from "./SliderCity.module.scss";

export const SliderCity: FC = () => {
  const [swiperWidth, setSwiperWidth] = useState();
  const [highlitedIndex, setHighlitedIndex] = useState<number | null>(null);

  const { data, isSuccess } = useGetCities();

  return (
    <Section>
      <Swiper
        className={style.slider}
        modules={[Navigation, FreeMode]}
        slidesPerView={2.2}
        watchOverflow
        freeMode
        onSlidesUpdated={(swiper) =>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setSwiperWidth((swiper as any).slidesSizesGrid[0])
        }
        breakpoints={{
          768: {
            slidesPerView: 2.3,
          },
          834: {
            slidesPerView: 2.6,
          },
          1024: {
            slidesPerView: 3.8,
          },
          2560: {
            slidesPerView: 6.3,
          },
        }}
      >
        <div
          className={style.sliderInitialBlock}
          style={{ width: swiperWidth }}
        >
          <div className={style.sliderInitialBlockText}>
            We have real estate in cities such as
          </div>
        </div>

        <SwiperSlide className={style.sliderSlide}></SwiperSlide>
        {isSuccess &&
          data?.cities.map((image, index) => {
            return (
              <SwiperSlide
                className={style.sliderSlide}
                onMouseEnter={() => setHighlitedIndex(index)}
                onMouseLeave={() => setHighlitedIndex(null)}
                key={image.id}
              >
                <Link to={`estates/?city=${image.id}`}>
                  <img src={image.city_img} alt="City" loading="eager" />

                  <div className="swiper-lazy-preloader"></div>
                  <div
                    className={`${style.sliderDescription}  ${highlitedIndex === index ? style.show : ""}`}
                  >
                    <div className={style.sliderDescriptionTitle}>
                      {image.city_name}
                    </div>
                    <div className={style.sliderDescriptionText}>
                      {image.city_description}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Section>
  );
};
