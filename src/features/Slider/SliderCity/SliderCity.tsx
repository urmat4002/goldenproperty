import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./SliderCity.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";

export const SliderCity = () => {
  return (
    <Swiper
      className={style.slider}
      modules={[Navigation]}
      slidesPerView={2}
      resistanceRatio={0}
      breakpoints={{
        768: {
          slidesPerView: 2.3,
        },
        1024: {
          slidesPerView: 3.1,
        },
      }}
    >
      <SwiperSlide className={style.sliderSlide}>
        <div className={style.sliderInitialBlock}>
          <div className={style.sliderInitialBlockText}>
            We have real estate in cities such as
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={style.sliderSlide}>
        <img
          src="https://cdnn21.img.ria.ru/images/152275/56/1522755601_0:0:1286:724_1920x0_80_0_0_5c15a33dbdf9a2a9e89e6f70b0b57166.jpg"
          alt="Картинка"
        />
        <div className={style.sliderDescription}> Dubai</div>
      </SwiperSlide>
      <SwiperSlide className={style.sliderSlide}>
        <img
          src="https://img.freepik.com/premium-photo/burj-khalifa-at-night-in-dubai_141438-942.jpg"
          alt="Картинка"
        />
        <div className={style.sliderDescription}> Istanbul</div>
      </SwiperSlide>
      <SwiperSlide className={style.sliderSlide}>
        <img
          src="https://img.freepik.com/premium-photo/a-night-view-of-dubai-with-a-burj-khalifa-and-the-burj-khalifa_7023-22207.jpg"
          alt="Картинка"
        />
        <div className={style.sliderDescription}> Antalya</div>
      </SwiperSlide>
      <SwiperSlide className={style.sliderSlide}>
        <img
          src="https://img.freepik.com/premium-photo/black-and-white-night-view-at-illuminated-skyscraper-of-burj-khalifa-in-downtown-dubai-uae_552127-2793.jpg"
          alt="Картинка"
        />
        <div className={style.sliderDescription}> Dubai</div>
      </SwiperSlide>
    </Swiper>
  );
};
