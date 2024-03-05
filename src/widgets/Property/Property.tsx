import { FC, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button, Typography } from "@/shared/ui";
import { Section } from "@/features";
import { TrimLimit } from "@/shared/helper/TrimLimit/TrimLimit";
import { useInnerWidthExceedsDefault } from "@/shared/helper/ScreenWidthTracker";
import style from "./Property.module.scss";
import { Link } from "react-router-dom";
import { useGetCityById, useGetStaticData } from "@/shared/api/hooks";

export const Property: FC = () => {
  const state = useInnerWidthExceedsDefault({ defaultThreshold: 992 });
  const [value, setValue] = useState<number>(0);
  const { data } = useGetCityById(3)
  const { data: staticData } = useGetStaticData()
  console.log(staticData);
  
  
  useEffect(() => {
    setValue(state ? 520 : 320);
  }, [state, value]);

  return (
    <Section title='Property' customClassName={style.property} container>
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
              <TrimLimit
                limit={value}
                more="estates/"
                text="Living in Dubai has several advantages: Economic Growth: The
                city provides ample career opportunities with a vibrant economy
                and many business opportunities.International character: Dubai
                is a cultural bridge between East and West, providing unique
                diversity and intercultural experiences. Infrastructure: The
                city is known for its modern infrastructure, including tall
                buildings, innovative transport systems and modern entertainment
                complexes. Safety: Dubai is considered one of the safest places
                to live, which provides peace of mind to residents and permanent
                residents. Tax benefits: The absence of income tax and low tax
                rates are attractive"
              />
            </div>
          </div>
          {/* FIX_ME Dubai may end up having different id than 3, should consider that */}
          <Link to="/estates/?city=3">
            <Button type="primary">
              <Typography variant="button">{staticData?.static_data.body.see_real_estates}</Typography>
              <ArrowRight />
            </Button>
          </Link>
        </div>
        <div className={style.propertyImage}>
          <img
            src={data?.city.city_img}
            alt="Картина"
          />
        </div>
      </div>
    </Section>
  );
};
