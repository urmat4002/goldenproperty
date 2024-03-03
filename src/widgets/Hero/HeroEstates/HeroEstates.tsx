import { Section } from "@/features";
import { Filter } from "@/features/Filter";
import { Typography } from "@/shared/ui";
import { useGetCityById } from "@/shared/api/hooks";
import styles from "./HeroEstates.module.scss";

export const HeroEstates = ({ cityId }: { cityId: string }) => {
  const { data } = useGetCityById(cityId);
  const city = data?.city;

  return (
    <Section container hero>
      <div className={styles.HeroEstates}>
        <div className={styles.HeroEstatesContent}>
          <Typography variant="h1">{city?.city_name || "..."}</Typography>
          <Typography variant="body">
            {city?.city_description || "..."}
          </Typography>
        </div>
        <Filter />
      </div>
    </Section>
  );
};
