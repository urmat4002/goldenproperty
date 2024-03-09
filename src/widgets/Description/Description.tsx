import { useParams } from "react-router-dom";
import { Section } from "@/features";
import { useGetEstateById, useGetStaticData } from "@shared/api/hooks";
import { Typography } from "@/shared/ui";
import styles from "./Description.module.scss";

export const Description = () => {
  const { id } = useParams();
  const { data: staticData } = useGetStaticData();
  const { data: descriptionData } = useGetEstateById(id);

  return (
    <Section title={staticData?.static_data.body.description} container>
      <div className={styles.description}>
        <Typography className={styles.content} variant="body">
          {descriptionData?.estate.description}
        </Typography>
      </div>
    </Section>
  );
};
