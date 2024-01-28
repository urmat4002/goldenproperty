import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './Carousel.scss';

const image = ''

export const Carousel = () => {
  const IMAGES = [image, image, image, image];

  return (
    <div className="swiper">
      <div className="swiper__container">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={2}
          spaceBetween={50}
          navigation
          loop
          centeredSlides
        >
          {IMAGES.map((image) => {
            return (
              <SwiperSlide>
                <img src={image} alt="" />
                <div className="swiper-content">
                  <div className="swiper-content__title">Dubai</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
