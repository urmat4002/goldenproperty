import { Section } from "@/features";
import styles from "./Description.module.scss";
import {useGetEstateById, useGetStaticData} from "@shared/api/hooks";

export const Description = () => {
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
