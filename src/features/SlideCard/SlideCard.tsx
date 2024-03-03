import { Section } from "..";
import { PropertyCard } from "@/entities";
import style from "./SlideCard.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { useGetSimilarEstates } from "@/shared/api/hooks";

export const SlideCard = () => {
  const { id } = useParams();
  const { data } = useGetSimilarEstates(id);

  return (
    <Section title="Similar properties" container>
      <Swiper spaceBetween={20} slidesPerView={2.5}>
        <div className={style.Sliders}>
          {data &&
            data.estates.map((item) => (
              <SwiperSlide key={item.id} className={style.SlideCard}>
                <PropertyCard
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
