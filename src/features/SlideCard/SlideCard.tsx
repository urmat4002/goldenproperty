import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "..";
import { PropertyCard } from "@/entities";
import { useGetSimilarEstates, useGetStaticData } from "@/shared/api/hooks";
import { capitalize } from "@/shared/helper/utils";
import style from "./SlideCard.module.scss";

export const SlideCard = () => {
  const { id } = useParams();
  const { data } = useGetSimilarEstates(id);
  const { data: staticData } = useGetStaticData();
  return (
    <Section
      title={capitalize(staticData?.static_data.body.similar_properties)}
      container
    >
      <Swiper spaceBetween={20} slidesPerView="auto">
        <div className={style.Sliders}>
          {data &&
            data.estates.map((item) => (
              <SwiperSlide key={item.id} className={style.slideCard}>
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
