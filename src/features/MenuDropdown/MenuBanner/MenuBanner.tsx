import { FC, memo } from "react";
import { ICity } from "../types/MenuDropDown.types";
import styles from "./MenuBanner.module.scss";
import { Button, Typography } from "@/shared/ui";
import { ArrowRight } from "lucide-react";
import { TrimLimit } from "@/shared/helper/TrimLimit/TrimLimit";

interface MenuBannerProps {
  data: ICity;
}

export const MenuBanner: FC<MenuBannerProps> = memo(({ data }) => {
  return (
    <div className={styles.menuBanner}>
      <div className={styles.menuBannerTop}>
        <div className={styles.menuBannerContent}>
          <Typography variant="h2" weight="semibold" color="gold">
            {data.city__name}
          </Typography>
          <div className={styles.menuBannerDescription}>
            <TrimLimit
              text={data.city__description}
              limit={560}
              more={`estates/${data.id}`}
            />
          </div>
        </div>
        <div className={styles.menuBannerImage}>
          <img src={data.city__img} alt={data.city__name} />
        </div>
      </div>
      <Button type="primary" customClasses={styles.menuBannerButton}>
        <Typography variant="button" className={styles.menuBannerTypography}>
          See real estates
        </Typography>
        <ArrowRight />
      </Button>
    </div>
  );
});
