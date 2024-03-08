import { useState, FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { WhatsApp } from "@shared/ui/Icons";
import { Estate } from "@/shared/api/types";
import styles from "./PropertyCard.module.scss";
import { useWhatsApp } from "@/shared/api/hooks";

export const PropertyCard: FC<Estate> = ({
  images: originalImages,
  price_usd,
  city,
  project,
  id,
}) => {
  const { whatsappUrl } = useWhatsApp(id);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = originalImages.slice(0, 15);

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
    <div className={styles.propertyCard}>
      <div className={styles.imageWrapper}>
        <Link to={`${id}`}>
          <img
            className={styles.image}
            src={images[currentSlide]}
            alt={project.name}
          />
        </Link>

        <div className={styles.arrowButtonWrapper}>
          <button className={styles.arrowButton} onClick={handlePrev}>
            <ChevronLeft />
          </button>
          <button className={styles.arrowButton} onClick={handleNext}>
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.dotsWrapper}>
        {images.map((_, index) => (
          <span
            key={index}
            className={clsx(
              styles.dot,
              currentSlide === index && styles.activeDot
            )}
          />
        ))}
      </div>

      <div className={styles.content}>
        <Link to={`${id}`}>
          <h3 className={styles.projectName}>{project.name}</h3>
        </Link>

        <p className={styles.location}>
          <MapPin height={16} />
          {`${city},  ${project.location}`}
        </p>

        <p className={styles.price}>USD {price_usd.toLocaleString("us")}</p>
      </div>

      <Link to={whatsappUrl} target="_blank">
        <button className={styles.buttonWhatsapp}>
          WhatsApp
          <WhatsApp />
        </button>
      </Link>
    </div>
  );
};
