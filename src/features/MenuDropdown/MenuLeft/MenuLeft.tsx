import { Button, Typography } from "@/shared/ui";
import styles from "./MenuLeft.module.scss";
import clsx from "clsx";
import { FC } from "react";
import { ICity } from "../types/MenuDropDown.types";

interface MenuLeftProps {
  data: ICity[];
  // eslint-disable-next-line no-unused-vars
  onClick: (id: number) => void;
  id: number;
}

export const MenuLeft: FC<MenuLeftProps> = ({ data, onClick, id }) => {
  return (
    <div className={styles.menuLeft}>
      {data.map((item) => {
        return (
          <Button
            customClasses={styles.menuLeftButton}
            type="link"
            key={item.id}
            onClick={() => {
              onClick(item.id);
            }}
          >
            <Typography
              variant="body"
              weight="medium"
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
