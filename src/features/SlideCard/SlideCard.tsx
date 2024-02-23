import { Section } from '..'
import { ObjectCard } from "@/entities";
import style from './SlideCard.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";

export const SlideCard = () => {
  const Cards = [
    {
      id: 0,
      title: 'Dubai',
      "price_usd": 252450.0,
      "project": {
                "name": "Artesia A",
                "location": "Artesia"
            },
      images: [
        "http://209.38.228.54/back_media/estate/Antalya/70/VuWfMGDKnt.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/syNydGhnPy.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/GDwXBWgVHJ.webp",
      ]
    },
    {
      id: 1,
      title: 'Dubai',
      "price_usd": 252450.0,
      "project": {
                "name": "Artesia A",
                "location": "Artesia"
            },
      images: [
        "http://209.38.228.54/back_media/estate/Antalya/70/VuWfMGDKnt.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/syNydGhnPy.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/GDwXBWgVHJ.webp",
      ]
    },
    {
      id: 2,
      title: 'Dubai',
      "price_usd": 252450.0,
      "project": {
                "name": "Artesia A",
                "location": "Artesia"
            },
      images: [
        "http://209.38.228.54/back_media/estate/Antalya/70/VuWfMGDKnt.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/syNydGhnPy.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/GDwXBWgVHJ.webp",
      ]
    },
    {
      id: 3,
      title: 'Dubai',
      "price_usd": 252450.0,
      "project": {
                "name": "Artesia A",
                "location": "Artesia"
            },
      images: [
        "http://209.38.228.54/back_media/estate/Antalya/70/VuWfMGDKnt.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/syNydGhnPy.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/GDwXBWgVHJ.webp",
      ]
    },
    {
      id: 4,
      title: 'Dubai',
      "price_usd": 252450.0,
      "project": {
                "name": "Artesia A",
                "location": "Artesia"
            },
      images: [
        "http://209.38.228.54/back_media/estate/Antalya/70/VuWfMGDKnt.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/syNydGhnPy.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/GDwXBWgVHJ.webp",
      ]
    },
    {
      id: 5,
      title: 'Dubai',
      "price_usd": 252450.0,
      "project": {
                "name": "Artesia A",
                "location": "Artesia"
            },
      images: [
        "http://209.38.228.54/back_media/estate/Antalya/70/VuWfMGDKnt.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/syNydGhnPy.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/GDwXBWgVHJ.webp",
      ]
     
    },
    {
      id: 6,
      title: 'Dubai',
      "price_usd": 252450.0,
      "project": {
                "name": "Artesia A",
                "location": "Artesia"
            },
      images: [
        "http://209.38.228.54/back_media/estate/Antalya/70/VuWfMGDKnt.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/syNydGhnPy.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/GDwXBWgVHJ.webp",
      ]
    },
    {
      id: 7,
      title: 'Dubai',
      "price_usd": 252450.0,
      "project": {
                "name": "Artesia A",
                "location": "Artesia"
            },
      images: [
        "http://209.38.228.54/back_media/estate/Antalya/70/VuWfMGDKnt.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/syNydGhnPy.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/GDwXBWgVHJ.webp",
      ]
    },
    {
      id: 8,
      title: 'Dubai',
      "price_usd": 252450.0,
      "project": {
        "name": "Artesia A",
        "location": "Artesia"
      },
      images: [
        "http://209.38.228.54/back_media/estate/Antalya/70/VuWfMGDKnt.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/syNydGhnPy.webp",
        "http://209.38.228.54/back_media/estate/Antalya/70/GDwXBWgVHJ.webp",
      ]
    },
  ]
  return (
    <Section container>
      <Swiper
        spaceBetween={20}
        slidesPerView={2.5}
      >
      <div className={style.Sliders}>
          {Cards.map((item) => (
            <SwiperSlide className={style.SlideCard}>
              <ObjectCard
                key={item.id}
                id={item.id}
                images={Array.isArray(item.images) ? item.images : [item.images]}
                price_usd={item.price_usd}
                city={item.title}
                project={item.project}
              />
            </SwiperSlide>
          ))}
      </div>
      </Swiper>
    </Section>
  )
}
