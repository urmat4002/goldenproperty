// MenuDropdown.tsx
import { useEffect, useState } from "react";
import styles from "./MenuDropdown.module.scss";
import datas from "./data/db.json";
import { ICity } from "./types/MenuDropDown.types";
import { MenuBanner } from "./MenuBanner";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import { setClose, setOpen } from "@/shared/slices/MenuCityHover/MenuCityHover";
import { MenuLeft } from "./MenuLeft/MenuLeft";
import clsx from 'clsx'
import { useGetCities } from '@/shared/api/hooks'

export const MenuDropdown = () => {
  const [city, setCity] = useState<ICity | undefined>(undefined);
  const [cityId, setCityId] = useState<number>(0);
  const [dataCity] = useState<ICity[]>(datas);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menuSlice.isOpen);

  const { data } = useGetCities()

  console.log(data, "data")

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
    <div
      onMouseEnter={() => dispatch(setOpen())}
      onMouseLeave={() => dispatch(setClose())}
      className={clsx(styles.menuDropdown, isOpen ? styles.open : styles.close )}
    >
      <div className={styles.menuDropdownContainer}>
        {dataCity && (
          <MenuLeft onClick={handleCityClick} data={dataCity} />
        )}
        {city && <MenuBanner data={city} />}
      </div>
    </div>
  );
};
