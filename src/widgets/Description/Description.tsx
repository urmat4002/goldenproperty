import { Section } from "@/features";
import styles from "./Description.module.scss";
import {useGetEstateById, useGetStaticData} from "@shared/api/hooks";
import {useParams} from "react-router-dom"

export const Description = () => {
  const {id} = useParams()
  const {data} = useGetStaticData();
  const {data:data1} = useGetEstateById()
    console.log(data1)
  return (
    <Section title = {data?.static_data.body.description} container>
      <div className={styles.description}>
          {data1?.estate.description}
      </div>
    </Section>
  );
};
