import { Link } from "react-router-dom";
import { Section } from "@/features";
import { Button, Typography } from "@shared/ui";
import { Filter } from "@/features/Filter";
import styles from "./HeroHome.module.scss";
import { useGetStaticData } from "@/shared/api/hooks";
import { capitalize } from "@/shared/helper/utils";

export const HeroHome = () => {
  const { data } = useGetStaticData();

  return (
    <Section color="white" hero>
      <div className={styles.heroHome}>
        <img
          className={styles.heroHomeBackground}
          src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
        />
        <div className={styles.heroHomeContent}>
          <div className={styles.heroHomeContainer}>
            <div className={styles.heroHomeText}>
              <Typography variant="large">
                <span>Golden</span> House
              </Typography>
              <Typography variant="body" capitalize>
                {data?.static_data.body.slogan ||
                  "Find your dream home with us"}
              </Typography>
            </div>
            <Link to="/estates">
              <Button type="primary">
                <Typography variant="button">
                  {capitalize(data?.static_data.body.see_real_estates)}
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroHomeFilterSubsection}>
        <div className={styles.heroHomeFilterWrapper}>
          <Filter />
        </div>
      </div>
    </Section>
  );
};
