import { useState, FC } from "react";
import styles from "./ObjectCard.module.scss";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { WhatsApp } from "@shared/ui/Icons";
import { Link } from "react-router-dom";
import { Estate } from "@/shared/api/types";

export const ObjectCard: FC<Estate> = ({
  images,
  price_usd,
  city,
  project,
  id,
}) => {
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
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={images[currentSlide]}
          alt={project.name}
        />

        <div className={styles.buttonWrapper}>
          <button className={styles.arrowButton} onClick={handlePrev}>
            <ChevronLeft />
          </button>
          <button className={styles.arrowButton} onClick={handleNext}>
            <ChevronRight />
          </button>
        </div>

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
