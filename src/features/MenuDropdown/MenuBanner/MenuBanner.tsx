import { ICity } from "../types/MenuDropDown.types";
import styles from "./MenuBanner.module.scss";
import { Typography } from "@/shared/ui";
// import { TrimLimit } from "@/shared/helper/TrimLimit/TrimLimit";
import { useGetStaticData } from "@/shared/api/hooks";
import { IBody } from "@/shared/api/types";
import { GButton } from "@/shared/ui/Button/GButton";
import { Link } from "react-router-dom";

interface MenuBannerProps {
  city: ICity;
  closeDDM: () => void;
}

export const MenuBanner: React.FC<MenuBannerProps> = ({ closeDDM, city }) => {
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
            <Typography variant="body" weight="regular" color="white">
              {city.city_description}
            </Typography>
          </div>
        </div>
        <img
          src={city.city_img}
          alt={city.city_name}
          className={styles.menuBannerImage}
        />
      </div>
      <Link to={`/estates/?city=${city.id}`} onClick={closeDDM}>
        <GButton variant="navigate">{seeRealEstates?.see_real_estates}</GButton>
      </Link>
    </div>
  );
};
