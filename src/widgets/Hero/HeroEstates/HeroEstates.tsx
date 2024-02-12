import { Section } from "@/features";
import style from "./HeroEstates.module.scss";
import { Filter } from "@/features/Filter";
import { Typography } from "@/shared/ui";

export const HeroEstates = () => {
  return (
    <Section container hero>
      <div className={style.HeroEstates}>
        <div className={style.HeroEstatesContent}>
          <Typography variant="h1">Dubai</Typography>
          <Typography variant="body">
            Dubai is a city and emirate in the United Arab Emirates known for
            luxury shopping, ultramodern architecture and a lively nightlife
            scene. Burj Khalifa, an 830m-tall tower, dominates the
            skyscraper-filled skyline. At its foot lies Dubai Fountain, with
            jets and lights choreographed to music. On artificial islands just
            offshore is Atlantis, The Palm, a resort with water and
            marine-animal parks.
          </Typography>
        </div>
        <Filter />
      </div>
    </Section>
  );
};
