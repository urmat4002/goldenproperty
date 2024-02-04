import { useEffect, useState } from 'react';
import styles from './MenuDropdown.module.scss';
import data from './data/db.json';
import { ICity } from './types/MenuDropDown.types';
import { MenuBanner } from './MenuBanner';
import { MenuLeftbar } from './MenuLeftbar';
import { useAppDispatch } from '@/app/lib/hooks/hooks';
import { setClose, setOpen } from '@/app/lib/features/MenuCityHover/MenuCityHover'

export const MenuDropdown = () => {
  const [city, setCity] = useState<ICity | undefined>(undefined);
  const [cityId, setCityId] = useState<number>(0);
  const [dataCity] = useState<ICity[]>(data);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dataCity.map((item) => {
      if (item.id === cityId) {
        return setCity(item);
      }
    });
  }, [cityId]);

  return (
    <div
      onMouseEnter={() => dispatch(setOpen())}
      onMouseLeave={() => dispatch(setClose())}
      className={styles.menuDropdown}
    >
      <div className={styles.menuDropdownContainer}>
        {dataCity && <MenuLeftbar data={dataCity} onClick={setCityId} isActive= {cityId} />}
        {city && <MenuBanner data={city} />}
      </div>
    </div>
  );
};
