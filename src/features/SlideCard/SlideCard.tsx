import { Section } from "..";
import { ObjectCard, ObjectCardProps } from "@/entities";
import style from "./SlideCard.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SlideCard = () => {
  const [estates, setEstates] = useState<ObjectCardProps[]>([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://209.38.228.54/api/v1/estate/1/similar/`)
      .then((response) => response.json())
      .then((json) => {
        setEstates(json.estates);
      });
  }, [id]);
  return (
    <Section title="Similar properties" container>
      <Swiper spaceBetween={20} slidesPerView={2.5}>
        <div className={style.Sliders}>
          {estates &&
            estates.map((item) => (
              <SwiperSlide key={item.id} className={style.SlideCard}>
                <ObjectCard
                  id={item.id}
                  images={
                    Array.isArray(item.images) ? item.images : [item.images]
                  }
                  price_usd={item.price_usd}
                  city={item.city}
                  project={item.project}
                />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </Section>
  );
};
