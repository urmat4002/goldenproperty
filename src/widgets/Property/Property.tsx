import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button, Typography } from "@/shared/ui";
import { Section } from "@/features";
import { useInnerWidthExceedsDefault } from "@/shared/helper/ScreenWidthTracker";
import { useGetCityById, useGetStaticData } from "@/shared/api/hooks";
import style from "./Property.module.scss";

export const Property: FC = () => {
  const state = useInnerWidthExceedsDefault({ defaultThreshold: 992 });
  const [value, setValue] = useState<number>(0);
  const { data } = useGetCityById(3);
  const { data: staticData } = useGetStaticData();

  // console.log(data?.city.city_description);

  useEffect(() => {
    setValue(state ? 520 : 320);
  }, [state, value]);

  return (
    <Section title="Property" customClassName={style.property} container>
      <div className={style.propertyBody}>
        <div className={style.propertyContent}>
          <div className={style.textBlock}>
            <Typography
              variant="h2"
              color="gold"
              weight="bold"
              className={style.textBlockTitle}
            >
              {data?.city.city_name}
            </Typography>
            <div className={style.textBlockDescription}>
              <Typography variant="body" weight="regular" color="white">
                {data?.city.city_description}
              </Typography>
            </div>
          </div>
          {/* FIX_ME Dubai may end up having different id than 3, should consider that */}
          <Link to="/estates/?city=3">
            <Button type="primary">
              <Typography variant="button" capitalize>
                {staticData?.static_data.body.see_real_estates}
              </Typography>
              <ArrowRight />
            </Button>
          </Link>
        </div>
        <div className={style.propertyImage}>
          <img src={data?.city.city_img} alt="Картина" />
        </div>
      </div>
    </Section>
  );
};
