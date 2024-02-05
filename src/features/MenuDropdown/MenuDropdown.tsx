import { useEffect, useState } from 'react'
import styles from './MenuDropdown.module.scss'
import data from './data/db.json'
import { ICity } from './types/MenuDropDown.types'
import { MenuBanner } from './MenuBanner'
import { useAppDispatch } from '@/shared/hooks/hooks'
import { setClose, setOpen } from '@/shared/slices/MenuCityHover/MenuCityHover'
import { Button, Typography } from '@/shared/ui'
import clsx from 'clsx'

export const MenuDropdown = () => {
  const [city, setCity] = useState<ICity | undefined>(undefined)
  const [cityId, setCityId] = useState<number>(0)
  const [dataCity] = useState<ICity[]>(data)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dataCity.map((item) => {
      if (item.id === cityId) {
        return setCity(item)
      }
    })
  }, [cityId])

  return (
    <div
      onMouseEnter={() => dispatch(setOpen())}
      onMouseLeave={() => dispatch(setClose())}
      className={styles.menuDropdown}
    >
      <div className={styles.menuDropdownContainer}>
        <div className={styles.menuLeft}>
          {data.map((item) => {
            return (
              <Button
                customClasses={styles.menuLeftButton}
                type="link"
                key={item.id}
                onClick={() => {
                  setCityId(item.id)
                }}
              >
                <Typography
                  variant="body"
                  weight="medium"
                  className={clsx(
                    styles.menuBannerTypography,
                    cityId ? styles.active : styles.default
                  )}
                >
                  {item.city__name}
                </Typography>
              </Button>
            )
          })}
        </div>
        {city && <MenuBanner data={city} />}
      </div>
    </div>
  )
}
