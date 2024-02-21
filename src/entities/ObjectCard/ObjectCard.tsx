import { useState, FC } from "react";
import styles from "./ObjectCard.module.scss";
import { MapPin } from "lucide-react";
import { WhatsApp } from "@shared/ui/Icons";
import { Link } from "react-router-dom";
import { ObjectCardProps } from ".";

export const ObjectCard: FC<ObjectCardProps> = (props) => {
  const { images, price_usd, city, project, id } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((oldSlide) => {
      if (oldSlide === 0) {
        return images.length - 1;
      } else {
        return oldSlide - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentSlide((oldSlide) => (oldSlide + 1) % images.length);
  };

  return (
    <div className={styles.objectCard}>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageContainerReal}
          src={images[currentSlide]}
          alt="Serena Living Tower"
        />
        <button className={styles.buttonSliderPrev} onClick={handlePrev}>
          ‹
        </button>
        <button className={styles.buttonSliderNext} onClick={handleNext}>
          ›
        </button>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={currentSlide === index ? styles.activeDot : styles.dot}
            />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_1}>
          <h1>
            <Link to={`${id}`}>{project.name}</Link>
          </h1>
          <p>
            <MapPin />
            {`${city},  ${name}`}
          </p>
          <p className={styles.price}>AED {price_usd}</p>
        </div>
        <div className={styles.content_2}>
          <button className={styles.button_1}>
            Whatsapp
            <WhatsApp />
          </button>
        </div>
      </div>
    </div>
  );
};
