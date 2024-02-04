import { FC, memo } from 'react';
import { ICity } from '../types/MenuDropDown.types';
import styles from './MenuBanner.module.scss';
import { Button, Typography } from '@/shared/ui';
import { ArrowRight } from 'lucide-react';

interface MenuBannerProps {
  data: ICity;
}

export const MenuBanner: FC<MenuBannerProps> = memo(({ data }) => {
  return (
    <div className={styles.menuBanner}>
      <div className={styles.menuBannerTop}>
        <div className={styles.menuBannerContent}>
          <Typography variant="Title3" weight="semibold" color="white">
            {data.city__name}
          </Typography>
          <div className={styles.menuBannerDescription}>
            <Typography variant="Caption2" weight="regular" color="white">
              {data.city__description}
            </Typography>
          </div>
        </div>
        <div className={styles.menuBannerImage}>
          <img src={data.city__img} alt={data.city__name} />
        </div>
      </div>
      <Button type="primary" customClasses={styles.menuBannerButton}>
        <Typography variant="Caption1" weight="medium" className={styles.menuBannerTypography}>
          See real estates
        </Typography>
        <ArrowRight />
      </Button>
    </div>
  );
});
