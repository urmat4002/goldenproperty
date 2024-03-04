import { Feather } from "lucide-react";
import style from "./Features.module.scss";
import { Section } from "@/features";
import { useParams } from "react-router-dom";
import { useGetEstateById, useGetStaticData } from "@/shared/api/hooks";
import { Typography } from "@/shared/ui";

export const Features = () => {
  const { id } = useParams()
  const { data } = useGetEstateById(id)
  const { data : Static } = useGetStaticData()
  
  return (
    <Section title={Static?.static_data.body.features_and_amenities}>
      <div className={style.features}>
        <div className={style.featuresContainer}>
          {data?.estate.project.facilities.map((features) => (
            <div className={style.featuresItem} key={features.type}>
              {features.icon ? <img src={features.icon} alt="" /> : <Feather />}
              <Typography variant='body' capitalize>{features.type}</Typography>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};