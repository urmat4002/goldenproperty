// MenuDropdown.tsx
import { useEffect, useState } from "react";
import styles from "./MenuDropdown.module.scss";
import { ICity } from "./types/MenuDropDown.types";
import { MenuBanner } from "./MenuBanner";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import { setClose, setOpen } from "@/shared/slices/MenuCityHover/MenuCityHover";
import { MenuLeft } from "./MenuLeft/MenuLeft";
import clsx from "clsx";
import { useGetCities } from "@/shared/api/hooks";

export const MenuDropdown = () => {
  const [city, setCity] = useState<ICity | undefined>(undefined);
  const [cityId, setCityId] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { data } = useGetCities();
  const isOpen = useAppSelector((state) => state.menuSlice.isOpen);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cities = data?.cities || [];

  useEffect(() => {
    cities.forEach((item) => {
      if (item.id === cityId) {
        return setCity(item);
      }
    });
  }, [cities, cityId]);

  const handleCityClick = (id: number) => {
    setCityId(id);
  };

  return (
    <div
      onMouseEnter={() => dispatch(setOpen())}
      onMouseLeave={() => dispatch(setClose())}
      className={clsx(styles.menuDropdown, isOpen ? styles.open : styles.close)}
    >
      <div className={styles.menuDropdownContainer}>
        {cities && <MenuLeft onClick={handleCityClick} id={cityId} />}
        {city && <MenuBanner city={city} />}
      </div>
    </div>
  );
};
