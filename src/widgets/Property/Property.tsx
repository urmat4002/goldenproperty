import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@/shared/ui";
import { Section } from "@/features";
import { useGetCities, useGetStaticData } from "@/shared/api/hooks";
import { GButton } from "@/shared/ui/Button/GButton";
import styles from "./Property.module.scss";

export const Property: FC = () => {
  const { data } = useGetCities();
  const { staticData } = useGetStaticData();

  const firstCityData = data?.cities?.[0];

  return (
    <Section
      title={staticData?.body.property || "Property"}
      customClassName={styles.property}
      container
    >
      <div className={styles.body}>
        <div className={styles.content}>
          <Typography
            variant="h2"
            color="gold"
            weight="bold"
            className={styles.title}
          >
            {firstCityData?.city_name || "Dubai"}
          </Typography>

          <div className={styles.description}>
            <Typography variant="body" weight="regular" color="white">
              {firstCityData?.city_description}
            </Typography>
            <div className={styles.descriptionShade}></div>
          </div>

          <Link
            className={styles.button}
            to={`/estates/?city=${firstCityData?.id || "1"}`}
          >
            <GButton className={styles.button} variant="navigate">
              {staticData?.body.see_real_estates || "See real estates"}
            </GButton>
          </Link>
        </div>

        <img
          className={styles.image}
          src={firstCityData?.city_img}
          alt="Картина"
        />
      </div>
    </Section>
  );
};
