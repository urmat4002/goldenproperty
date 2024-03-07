import { FC, memo } from "react";
import { ICity } from "../types/MenuDropDown.types";
import styles from "./MenuBanner.module.scss";
import { Button, Typography } from "@/shared/ui";
import { ArrowRight } from "lucide-react";
import { TrimLimit } from "@/shared/helper/TrimLimit/TrimLimit";
import { useGetStaticData } from '@/shared/api/hooks';
import { IBody } from '@/shared/api/types'

interface MenuBannerProps {
  city: ICity;
}

export const MenuBanner: FC<MenuBannerProps> = memo(({ city }) => {
  const { data } = useGetStaticData();
  const seeRealEstates = data?.static_data.body as IBody | undefined
  return (
    <div className={styles.menuBanner}>
      <div className={styles.menuBannerTop}>
        <div className={styles.menuBannerContent}>
          <Typography variant="h2" weight="semibold" color="gold">
            {city.city_name}
          </Typography>
          <div className={styles.menuBannerDescription}>
            <TrimLimit
              text={city.city_description}
              limit={560}
              more={`estates/${city.id}`}
            />
          </div>
        </div>
        <div className={styles.menuBannerImage}>
          <img src={city.city_img} alt={city.city_name} />
        </div>
      </div>
      <Button type="primary" customClasses={styles.menuBannerButton}>
        <Typography variant="button" className={styles.menuBannerTypography}>
          {seeRealEstates?.see_real_estates}
        </Typography>
        <ArrowRight />
      </Button>
    </div>
  );
});
