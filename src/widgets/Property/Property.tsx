import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button, Typography } from "@/shared/ui";
import { Section } from "@/features";
import { useInnerWidthExceedsDefault } from "@/shared/helper/ScreenWidthTracker";
import { useGetCities, useGetStaticData } from "@/shared/api/hooks";
import styles from "./Property.module.scss";

export const Property: FC = () => {
  const state = useInnerWidthExceedsDefault({ defaultThreshold: 992 });
  const [value, setValue] = useState<number>(0);
  const { data } = useGetCities();
  const { data: staticData } = useGetStaticData();

  console.log(staticData?.static_data.body.see_real_estates);

  const firstCityData = data?.cities?.[0];

  useEffect(() => {
    setValue(state ? 520 : 320);
  }, [state, value]);

  return (
    <Section
      title={staticData?.static_data.body.property || "Property"}
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

          <Link to={`/estates/?city=${firstCityData?.id || "1"}`}>
            <Button type="primary">
              <Typography variant="button" capitalize>
                {staticData?.static_data.body.see_real_estates ||
                  "See real estates"}
              </Typography>
              <ArrowRight />
            </Button>
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
