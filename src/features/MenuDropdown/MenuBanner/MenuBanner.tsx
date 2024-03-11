import { ICity } from "../types/MenuDropDown.types";
import styles from "./MenuBanner.module.scss";
import { Typography } from "@/shared/ui";
import { TrimLimit } from "@/shared/helper/TrimLimit/TrimLimit";
import { useGetStaticData } from "@/shared/api/hooks";
import { IBody } from "@/shared/api/types";
import { GButton } from "@/shared/ui/Button/GButton";
import { Link } from "react-router-dom";

interface MenuBannerProps {
  city: ICity;
}

export const MenuBanner: React.FC<MenuBannerProps> = ({ city }) => {
  const { data } = useGetStaticData();

  const seeRealEstates = data?.static_data.body as IBody | undefined;

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
        <img
          src={city.city_img}
          alt={city.city_name}
          className={styles.menuBannerImage}
        />
      </div>
      <Link to={`/estates/?city=${city.id}`}>
        <GButton variant="navigate">{seeRealEstates?.see_real_estates}</GButton>
      </Link>
    </div>
  );
};
