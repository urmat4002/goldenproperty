import { Section } from "@/features";
import styles from "./Description.module.scss";
import {useGetEstateById, useGetStaticData} from "@shared/api/hooks";
import {useParams} from "react-router-dom"

export const Description = () => {
  const {id} = useParams()
  const {data} = useGetStaticData();
  const {data:dataDescription} = useGetEstateById()
  return (
    <Section title = {data?.static_data.body.description} container>
      <div className={styles.description}>
          {dataDescription?.estate.description}
      </div>
    </Section>
  );
};
