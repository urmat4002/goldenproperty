import { Link } from "react-router-dom";
import { Typography } from "@/shared/ui";
import { useGetCities, useGetStaticData } from "@/shared/api/hooks";
import { GButton } from "@/shared/ui/Button/GButton";
import { useHeaderContext } from "@/app/providers/useHeaderContext";
import styles from "./CityDetails.module.scss";

export const CityDetails: React.FC<{ currentCityId: number }> = ({
  currentCityId,
}) => {
  const { staticData } = useGetStaticData();
  const { closeDropdown } = useHeaderContext();
  const { cities } = useGetCities();
  const city = cities?.find((city) => city.id === currentCityId);

  return (
    <div className={styles.cityDetails}>
      <div className={styles.text}>
        <Typography variant="h2" weight="semibold" color="gold">
          {city?.city_name}
        </Typography>
        <div className={styles.cityDescription}>
          <Typography variant="body" weight="regular" color="white">
            {city?.city_description}
          </Typography>
        </div>
      </div>

      <img
        src={city?.city_img}
        alt={city?.city_name}
        className={styles.menuBannerImage}
      />

      <Link
        className={styles.seeEstatesButton}
        to={(city && `/estates/?city=${city.id}`) || "#"}
        onClick={closeDropdown}
      >
        <GButton variant="navigate">
          {staticData?.body.see_real_estates || "See real estates"}
        </GButton>
      </Link>
    </div>
  );
};
