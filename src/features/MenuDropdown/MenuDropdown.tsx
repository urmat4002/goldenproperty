import { useState } from "react";
import styles from "./MenuDropdown.module.scss";
import { MenuBanner } from "./MenuBanner";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import { setClose, setOpen } from "@/shared/slices/MenuCityHover/MenuCityHover";
import { MenuLeft } from "./MenuLeft/MenuLeft";
import clsx from "clsx";
import { useGetCities } from "@/shared/api/hooks";

export const MenuDropdown = () => {
  const [cityId, setCityId] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { data } = useGetCities();
  const isOpen = useAppSelector((state) => state.menuSlice.isOpen);
  const cities = data?.cities || [];
  const currentCity = data?.cities.find((city) => city.id === cityId);

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
        {currentCity && <MenuBanner city={currentCity} />}
      </div>
    </div>
  );
};
