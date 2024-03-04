import { useParams } from "react-router-dom";
import { Feather } from "lucide-react";
import { Section } from "@/features";
import { useGetEstateById, useGetStaticData } from "@/shared/api/hooks";
import { Typography } from "@/shared/ui";
import { capitalize } from "@/shared/helper/utils";
import style from "./Features.module.scss";

export const Features = () => {
  const { id } = useParams();
  const { data } = useGetEstateById(id);
  const { data: staticData } = useGetStaticData();

  return (
    <Section
      title={capitalize(staticData?.static_data.body.features_and_amenities)}
    >
      <div className={style.features}>
        <div className={style.featuresContainer}>
          {data?.estate.project.facilities.map((features) => (
            <div className={style.featuresItem} key={features.type}>
              {features.icon ? <img src={features.icon} alt="" /> : <Feather />}
              <Typography variant="body" capitalize>
                {features.type}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
