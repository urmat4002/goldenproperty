import { Button, Typography } from "@/shared/ui";
import styles from "./MenuLeft.module.scss";
import clsx from "clsx";
import { FC } from "react";
import { ICity } from "../types/MenuDropDown.types";
import { useNavigate } from "react-router-dom";

interface MenuLeftProps {
  data: ICity[];
  // eslint-disable-next-line no-unused-vars
  onClick: (id: number) => void;
  id: number;
  isMobile?: boolean;
}

export const MenuLeft: FC<MenuLeftProps> = ({
  data,
  onClick,
  id,
  isMobile,
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.menuLeft}>
      {data.map((item) => {
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
              {item.city__name}
            </Typography>
          </Button>
        );
      })}
    </div>
  );
};
