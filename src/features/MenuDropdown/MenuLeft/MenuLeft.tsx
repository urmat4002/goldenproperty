import { Typography } from "@/shared/ui";
import styles from "./MenuLeft.module.scss";
import clsx from "clsx";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCities } from "@/shared/api/hooks";

interface MenuLeftProps {
  // eslint-disable-next-line no-unused-vars
  onClick?: (id: number) => void;
  id?: number;
  isMobile?: boolean;
  onClickClose?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuLeft: FC<MenuLeftProps> = ({
  onClick,
  isMobile,
  onClickClose,
}) => {
  const navigate = useNavigate();
  const { data } = useGetCities();
  const cities = data?.cities || [];
  const mobileClick = (id: number) => {
    onClickClose!(false);
    navigate(`/estates/?city=${id}`);
  };
  return (
    <div className={styles.menuLeft}>
      {cities.map((item) => {
        return (
          <a
            className={styles.menuLeftButton}
            type="link"
            key={item.id}
            onClick={() =>
              isMobile ? mobileClick(item.id) : onClick!(item.id)
            }
            onMouseEnter={() => (!isMobile ? onClick!(item.id) : undefined)}
          >
            <Typography
              variant="button"
              className={clsx(styles.menuBannerTypography)}
            >
              {item.city_name}
            </Typography>
          </a>
        );
      })}
    </div>
  );
};
