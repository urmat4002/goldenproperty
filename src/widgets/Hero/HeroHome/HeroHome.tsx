import { Section } from "@/features";
import styles from "./HeroHome.module.scss";
import { Button, Typography } from "@shared/ui";

export const HeroHome = () => {
  return (
    <Section container>
      <div className={styles.heroHome}>
        <div className={styles.heroHomeContent}>
          <div style={{ position: "relative" }}>
            <div className={styles.heroHomeLine} />
          </div>
          <Typography variant="h1" weight="bold">
            <span>Golden</span> House
          </Typography>
          <Typography variant="body" color="white" weight="medium">
            Find your dream home with us
          </Typography>
          <Button type="primary">See real estate</Button>
        </div>
      </div>
    </Section>
  );
};
