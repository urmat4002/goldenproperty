import { Section } from '..'
import style from './SlideCard.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";

export const SlideCard = () => {
  const Cards = [
    {
      id: 0,
      title: 'Dubai',
    },
    {
      id: 1,
      title: 'Dubai',
    },
    {
      id: 2,
      title: 'Dubai',
    },
    {
      id: 3,
      title: 'Dubai',
    },
    {
      id: 4,
      title: 'Dubai',
    },
    {
      id: 5,
      title: 'Dubai',
    },
    {
      id: 6,
      title: 'Dubai',
    },
    {
      title: 'Dubai',
    },
    {
      id: 8,
      title: 'Dubai',
    },
  ]
  return (
    <Section container>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
      >
      <div className={style.Sliders}>
        {Cards.map((item) =>
          <SwiperSlide className={style.SlidersCard}>
            <img src="https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg" alt="" />
            <p>{item.title}</p>
          </SwiperSlide>
        )}
      </div>
      </Swiper>
    </Section>
  )
}
