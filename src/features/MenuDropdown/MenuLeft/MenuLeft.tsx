import { Button, Typography } from "@/shared/ui";
import styles from "./MenuLeft.module.scss";
import clsx from "clsx";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCities } from '@/shared/api/hooks'

interface MenuLeftProps {
  // eslint-disable-next-line no-unused-vars
  onClick: (id: number) => void;
  id: number;
  isMobile?: boolean;
}

export const MenuLeft: FC<MenuLeftProps> = ({
  onClick,
  id,
  isMobile,
}) => {
  const navigate = useNavigate();
  const { data } = useGetCities();

  const cities = data?.cities || [];
  return (
    <div className={styles.menuLeft}>
      {cities.map((item) => {
        return (
          <Button
            customClasses={styles.menuLeftButton}
            type="link"
            key={item.id}
            onClick={
              isMobile
                ? () => navigate(`/estates/${item.id}`)
                : () => onClick(item.id)
            }
          >
            <Typography
              variant="button"
              className={clsx(
                styles.menuBannerTypography,
                id ? styles.active : styles.default
              )}
            >
              {item.city_name}
            </Typography>
          </Button>
        );
      })}
    </div>
  );
};
