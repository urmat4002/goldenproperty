import { ArrowRight } from "lucide-react";
import style from "./Property.module.scss";
import { Button, Typography } from "@/shared/ui";
import { Section } from "@/features";
import { TrimLimit } from "@/shared/helper/TrimLimit/TrimLimit";
import { useInnerWidthExceedsDefault } from "@/shared/helper/ScreenWidthTracker";
import { FC, useEffect, useState } from "react";

export const Property: FC = () => {
  const state = useInnerWidthExceedsDefault({ defaultThreshold: 992 });
  const [value, setValue] = useState<number>(0);

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
              Dubai
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
          <Button type="primary">
            <Typography variant="button">See real estates</Typography>
            <ArrowRight />
          </Button>
        </div>
        <div className={style.propertyImage}>
          <img
            src="https://cdnn21.img.ria.ru/images/152275/56/1522755601_0:0:1286:724_1920x0_80_0_0_5c15a33dbdf9a2a9e89e6f70b0b57166.jpg"
            alt="Картина"
          />
        </div>
      </div>
    </Section>
  );
};
