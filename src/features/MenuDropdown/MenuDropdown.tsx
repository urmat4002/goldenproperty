// MenuDropdown.tsx
import { useEffect, useState } from 'react'
import styles from './MenuDropdown.module.scss'
import data from './data/db.json'
import { ICity } from './types/MenuDropDown.types'
import { MenuBanner } from './MenuBanner'
import { useAppDispatch } from '@/shared/hooks/hooks'
import { setClose, setOpen } from '@/shared/slices/MenuCityHover/MenuCityHover'
import { MenuLeft } from './MenuLeft/MenuLeft'

export const MenuDropdown = () => {
  const [city, setCity] = useState<ICity | undefined>(undefined)
  const [cityId, setCityId] = useState<number>(0)
  const [dataCity] = useState<ICity[]>(data)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dataCity.forEach((item) => {
      if (item.id === cityId) {
        return setCity(item)
      }
    })
  }, [cityId, dataCity])

  const handleCityClick = (id: number) => {
    setCityId(id)
  }

  return (
    <div
      onMouseEnter={() => dispatch(setOpen())}
      onMouseLeave={() => dispatch(setClose())}
      className={styles.menuDropdown}
    >
      <div className={styles.menuDropdownContainer}>
        {dataCity && (
          <MenuLeft onClick={handleCityClick} data={dataCity} id={cityId} />
        )}
        {city && <MenuBanner data={city} />}
      </div>
    </div>
  )
}
