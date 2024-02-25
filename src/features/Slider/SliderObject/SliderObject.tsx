import { Section } from "@/features";

import { SwiperSlide, Swiper } from "swiper/react";
import style from "./SliderObject.module.scss";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Button, Typography } from "@/shared/ui";
import { FC } from "react";

interface SliderObjectProps {
  images1?: [];
  price_usd?: number;
  area?: number;
  city?: string;
  estate_type?: string;
  is_secondary?: boolean;
  completion?: string;
  is_furnished?: boolean;
  title?: string;
  description?: string;
}

export const SliderObject: FC<SliderObjectProps> = (props) => {
  const {
    images1,
    price_usd,
    area,
    city,
    estate_type,
    is_secondary,
    completion,
    is_furnished,
    title,
    description,
  } = props;

  return (
    <Section title={title} container>
      <Swiper
        navigation
        className={style.slider}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
      >
        {images1 &&
          images1.map((image) => {
            return (
              <SwiperSlide className={style.sliderSlide} key={image}>
                <div className={style.sliderSlideImg}>
                  <img src={image} alt="Cities" loading="eager" />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Swiper
        className={style.slider2}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
      >
        {images1 &&
          images1.map((image) => {
            return (
              <SwiperSlide className={style.slider2Slide2} key={image}>
                <div className={style.slider2Slide2Img}>
                  <img src={image} alt="Cities" loading="eager" />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className={style.text}>
        <Typography variant="body" weight="medium" color="white">
          {description}
        </Typography>
      </div>
      <div className={style.description}>
        <div>
          <div className={style.descriptionItem}>
            <Typography variant="body" weight="medium" color="white">
              {city}
            </Typography>
          </div>
          <div className={style.descriptionItem}>
            <Typography variant="body" weight="medium" color="white">
              Furnished: {is_furnished ? <span>yes</span> : <span>no</span>}
            </Typography>
          </div>
        </div>
        <div>
          <div className={style.descriptionItem}>
            <Typography variant="body" weight="medium" color="white">
              Type: {estate_type}
            </Typography>
          </div>

          <div className={style.descriptionItem}>
            <Typography variant="body" weight="medium" color="white">
              Area: {area}{" "}
            </Typography>
          </div>
        </div>
        <div>
          <div className={style.descriptionItem}>
            <Typography variant="body" weight="medium" color="white">
              Completion: {completion}
            </Typography>
          </div>
          <div className={style.descriptionItem}>
            <Typography variant="body" weight="medium" color="white">
              Is secondary: {is_secondary ? <span>yes</span> : <span>no</span>}{" "}
            </Typography>
          </div>
        </div>
      </div>
      <div className={style.price}>
        <Typography variant="h2" color="gold" weight="bold">
          Price at: {price_usd} USD
        </Typography>
        <div className={style.priceBtns}>
          <Button customClasses={style.priceBtnsItem} type="primary">
            Catalog
          </Button>
          <Button customClasses={style.priceBtnsItem} type="primary">
            WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  );
};
