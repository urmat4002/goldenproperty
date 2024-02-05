import React from 'react';
import styles from './HeroHome.module.scss';
import { Button } from "@shared/ui";
import { section } from "@features/";

export const HeroHome = () => {
  return (
    <section>
      <div className={styles.HeroHome}>
        <div className={styles.HeroHomeText}>
          <div style={{ position: 'relative' }}>
            <div className={styles.white}></div>
          </div>
          <h1><span>Golden </span> House</h1>
          <div>
            <p>Find your dream home <span>with us</span></p>
          </div>
          <div>
            <Button type="primary">See real estate</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
