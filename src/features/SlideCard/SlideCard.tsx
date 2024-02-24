import { Section } from '..'
import { ObjectCard, ObjectCardProps } from "@/entities";
import style from './SlideCard.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";


export const SlideCard = () => {
  const [estates, setEstates] = useState<ObjectCardProps[]>([]);
  useEffect(() => {
    fetch("/api/v1/estate")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.estates);
        setEstates(json.estates);
      });
  }, [])
  return (
    <Section container>
      <Swiper
        spaceBetween={20}
        slidesPerView={2.5}
      >
      <div className={style.Sliders}>
          {estates.map((item) => (
            <SwiperSlide className={style.SlideCard}>
              <ObjectCard
                key={item.id}
                id={item.id}
                images={Array.isArray(item.images) ? item.images : [item.images]}
                price_usd={item.price_usd}
                city={item.city}
                project={item.project}
              />
            </SwiperSlide>
          ))} 
      </div>
      </Swiper>
    </Section>
  )
}
