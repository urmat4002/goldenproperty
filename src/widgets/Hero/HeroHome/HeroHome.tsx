import { Link } from "react-router-dom";
import { Section } from "@/features";
import { Typography } from "@shared/ui";
import { Filter } from "@/features/Filter";
import { useGetCompany, useGetStaticData } from "@/shared/api/hooks";
import { GButton } from "@/shared/ui/Button/GButton";
import styles from "./HeroHome.module.scss";

export const HeroHome = () => {
  const { data } = useGetStaticData();
  const { company } = useGetCompany();

  return (
    <Section color="white" hero>
      <div className={styles.heroHome}>
        <img
          className={styles.heroHomeBackground}
          src={company?.background_img}
          alt="background"
        />
        <div className={styles.heroHomeContent}>
          <div className={styles.heroHomeContainer}>
            <div className={styles.heroHomeText}>
              <Typography variant="large">
                <span>Golden Hut</span> Properties
              </Typography>
              <Typography variant="h3" color="white" capitalize>
                {data?.static_data.body.slogan ||
                  "Find your dream home with us"}
              </Typography>
            </div>
            <Link to="/estates">
              <GButton>{data?.static_data.body.see_real_estates}</GButton>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroHomeFilterSubsection}>
        <div className={styles.heroHomeFilterWrapperContainer}>
          <Filter />
        </div>
      </div>
    </Section>
  );
};
