// MenuDropdown.tsx
import { useEffect, useState } from "react";
import data from "./data/db.json";
import { ICity } from "./types/MenuDropDown.types";
import { MenuBanner } from "./MenuBanner";
import { MenuLeft } from "./MenuLeft/MenuLeft";
import styles from "./MenuDropdown.module.scss";
import { Navbar } from "..";

export const MenuDropdown = () => {
  const [city, setCity] = useState<ICity | undefined>(undefined);
  const [cityId, setCityId] = useState<number>(0);
  const [dataCity] = useState<ICity[]>(data);

  useEffect(() => {
    dataCity.forEach((item) => {
      if (item.id === cityId) {
        return setCity(item);
      }
    });
  }, [cityId, dataCity]);

  const handleCityClick = (id: number) => {
    setCityId(id);
  };

  return (
    <div className={styles.menuDropdown}>
      <div className={styles.menuDropdownContainer}>
        {dataCity && (
          <MenuLeft onClick={handleCityClick} data={dataCity} id={cityId} />
        )}
        {city && <MenuBanner data={city} />}
      </div>

      <div className={styles.menuDropdownNavbar}>
        <Navbar />
      </div>
    </div>
  );
};
