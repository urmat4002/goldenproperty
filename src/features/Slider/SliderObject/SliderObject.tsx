import { Section } from "@/features";

import { SwiperSlide, Swiper } from "swiper/react";
import style from "./SliderObject.module.scss";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Button, Typography } from "@/shared/ui";
import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ModalContext } from "@/app/providers/Context";

interface Project {
  name: string;
  is_furnished: boolean;
  completion: string;
}
interface SliderObjectProps {
  images?: [];
  price_usd?: number;
  area?: number;
  city?: string;
  estate_type?: string;
  is_secondary?: boolean;
  completion?: string;
  is_furnished?: boolean;
  description?: string;
  project: Project;
}

export const SliderObject: FC = () => {
  const { openModal } = useContext(ModalContext);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [estate, setEstate] = useState<SliderObjectProps>(
    {} as SliderObjectProps
  );

  useEffect(() => {
    fetch(`http://209.38.228.54/api/v1/estate/1/`)
      .then((res) => res.json())
      .then((json) => {
        setEstate(json.estate);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Section title={isLoading ? "" : estate.project.name} container>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <>
          <Swiper
            navigation
            className={style.slider}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
          >
            {estate?.images &&
              estate.images.map((image) => {
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
            {estate.images &&
              estate.images.map((image) => {
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
              {estate.description}
            </Typography>
          </div>
          <div className={style.description}>
            <div>
              <div className={style.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  {`${estate.city}, ${estate.project.name}`}
                </Typography>
              </div>
              <div className={style.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  Furnished:
                  {estate.project.is_furnished ? (
                    <span> yes</span>
                  ) : (
                    <span> no</span>
                  )}
                </Typography>
              </div>
            </div>
            <div>
              <div className={style.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  Type: {estate.estate_type}
                </Typography>
              </div>

              <div className={style.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  Area: {estate.area}
                </Typography>
              </div>
            </div>
            <div>
              <div className={style.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  Completion: {estate.project.completion}
                </Typography>
              </div>
              <div className={style.descriptionItem}>
                <Typography variant="body" weight="medium" color="white">
                  Is secondary:{" "}
                  {estate.is_secondary ? <span>yes</span> : <span>no</span>}{" "}
                </Typography>
              </div>
            </div>
          </div>
          <div className={style.price}>
            <Typography variant="h2" color="gold" weight="bold">
              Price at: {estate.price_usd} USD
            </Typography>
            <div className={style.priceBtns}>
              <Button
                customClasses={style.priceBtnsItem}
                onClick={openModal}
                type="primary"
              >
                Catalog
              </Button>
              <Button customClasses={style.priceBtnsItem} type="primary">
                WhatsApp
              </Button>
            </div>
          </div>
        </>
      )}
    </Section>
  );
};
