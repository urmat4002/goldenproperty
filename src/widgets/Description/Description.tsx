import { useParams } from "react-router-dom";
import { Section } from "@/features";
import { useGetEstateById, useGetStaticData } from "@shared/api/hooks";
import styles from "./Description.module.scss";
import { Typography } from "@/shared/ui";

export const Description = () => {
  const { id } = useParams();
  const { data: staticData } = useGetStaticData();
  const { data: descriptionData } = useGetEstateById(id);

  const paragraphs = descriptionData?.estate.description.split("\n\n") || [];

  return (
    <Section title={staticData?.static_data.body.description} container>
      <div className={styles.description}>
        {paragraphs.map((item, index) => (
          <Typography key={index} variant="body">
            {item}
          </Typography>
        ))}
      </div>
    </Section>
  );
};
