import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./SliderCity.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SliderCity = () => {
  const [swiperWidth, setSwiperWidth] = useState();
  const [highlitedIndex, setHighlitedIndex] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: "https://cdnn21.img.ria.ru/images/152275/56/1522755601_0:0:1286:724_1920x0_80_0_0_5c15a33dbdf9a2a9e89e6f70b0b57166.jpg",
      title: "Dubai",
      description: `Dubai is a modern metropolis in the UAE with changing
      skyscrapers, luxury, innovation. The economic center,
      cultural diversity, safety and standard of living attract
      citizens and business representatives. skyscrapers, luxury,
      innovation. The economic center, cultural diversity, safety
      and standard of living attract citizens and business
      representatives.`,
    },
    {
      id: 2,
      src: "https://img.freepik.com/premium-photo/burj-khalifa-at-night-in-dubai_141438-942.jpg",
      title: "Antalya",
      description: `Dubai is a modern metropolis in the UAE with changing
      skyscrapers.`,
    },
    {
      id: 3,
      src: "https://img.freepik.com/premium-photo/a-night-view-of-dubai-with-a-burj-khalifa-and-the-burj-khalifa_7023-22207.jpg",
      title: "Bishkek",
      description: null,
    },
    {
      id: 4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-9hg3jEQjQ8xuL3XAu0kHhnsmKciZHLAWA&usqp=CAU",
      title: "Osh",
      description: null,
    },
  ];

  return (
    <>
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
        {images.map((image, index) => {
          return (
            <SwiperSlide
              className={style.sliderSlide}
              onMouseEnter={() => setHighlitedIndex(index)}
              onMouseLeave={() => setHighlitedIndex(null)}
              key={image.id}
            >
              <Link to={`estates/${image.id}`}>
                <img src={image.src} alt="Cities" loading="eager" />
                <div className="swiper-lazy-preloader" />
                <div
                  className={`${style.sliderDescription}  ${
                    highlitedIndex === index ? style.show : ""
                  }`}
                >
                  <div className={style.sliderDescriptionTitle}>
                    {image.title}
                  </div>
                  <div className={style.sliderDescriptionText}>
                    {image?.description}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
