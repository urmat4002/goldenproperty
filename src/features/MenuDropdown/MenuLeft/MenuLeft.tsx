import { Button, Typography } from "@/shared/ui";
import styles from "./MenuLeft.module.scss";
import clsx from "clsx";
import { FC, memo, useState } from "react";
import { ICity } from "../types/MenuDropDown.types";

interface MenuLeftProps {
  data: ICity[];
  // eslint-disable-next-line no-unused-vars
  onClick: (id: number) => void;
}

export const MenuLeft: FC<MenuLeftProps> = memo(({ data, onClick }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

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
              setIsActive(true)
            }}
          >
            <Typography
              variant="button"
              color={isActive ? 'gold' : 'white'}
              className={clsx(
                styles.menuBannerTypography,
                isActive ? styles.active : styles.default
              )}
            >
              {item.city__name}
            </Typography>
          </Button>
        );
      })}
    </div>
  );
});
