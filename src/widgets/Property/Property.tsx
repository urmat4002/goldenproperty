import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button, Typography } from "@/shared/ui";
import { Section } from "@/features";
import { useInnerWidthExceedsDefault } from "@/shared/helper/ScreenWidthTracker";
import { useGetCityById, useGetStaticData } from "@/shared/api/hooks";
import styles from "./Property.module.scss";

export const Property: FC = () => {
  const state = useInnerWidthExceedsDefault({ defaultThreshold: 992 });
  const [value, setValue] = useState<number>(0);
  const { data } = useGetCityById(3);
  const { data: staticData } = useGetStaticData();

  useEffect(() => {
    setValue(state ? 520 : 320);
  }, [state, value]);

  return (
    <Section title="Property" customClassName={styles.property} container>
      <div className={styles.body}>
        <div className={styles.content}>
          <Typography
            variant="h2"
            color="gold"
            weight="bold"
            className={styles.title}
          >
            {data?.city.city_name}
          </Typography>
          <div className={styles.description}>
            <Typography variant="body" weight="regular" color="white">
              {data?.city.city_description.repeat(3)}
            </Typography>
            <div className={styles.descriptionShade}></div>
          </div>
          {/* FIX_ME Dubai may end up having different id than 3, should consider that */}
          <Link className={styles.buttonWrapper} to="/estates/?city=3">
            <Button type="primary">
              <Typography variant="button" capitalize>
                {staticData?.static_data.body.see_real_estates}
              </Typography>
              <ArrowRight />
            </Button>
          </Link>
        </div>

        <img className={styles.image} src={data?.city.city_img} alt="Картина" />
      </div>
    </Section>
  );
};
