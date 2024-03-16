import { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Typography } from "@/shared/ui";
import { useGetCities } from "@/shared/api/hooks";
import { useHeaderContext } from "@/app/providers/useHeaderContext";
import styles from "./CityList.module.scss";

type CityListProps = {
  currentCityId?: number;
  setCurrentCityId?: React.Dispatch<React.SetStateAction<number>>;
};

export const CityList: FC<CityListProps> = ({
  currentCityId,
  setCurrentCityId,
}) => {
  const { isMobile, closeDropdown } = useHeaderContext();
  const { data } = useGetCities();
  const cities = data?.cities || [];

  const handleMouseEnter = (id: number) => {
    setCurrentCityId?.(id);
  };

  return (
    <div className={clsx(styles.cityList, isMobile && styles.mobile)}>
      {cities.map((city) => {
        return (
          <Link
            key={city.id}
            to={`/estates/?city=${city.id}`}
            onMouseEnter={() => handleMouseEnter(city.id)}
            onClick={closeDropdown}
          >
            <Typography
              variant={isMobile ? "body" : "button"}
              className={clsx(
                styles.cityName,
                city.id === currentCityId && styles.active
              )}
            >
              {city.city_name}
            </Typography>
          </Link>
        );
      })}
    </div>
  );
};
