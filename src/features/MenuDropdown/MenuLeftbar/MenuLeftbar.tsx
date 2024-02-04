import { FC, memo } from 'react';
import { ICity } from '../types/MenuDropDown.types';
import { Button, Typography } from '@/shared/ui'
import styles from './MenuLeftbar.module.scss';
import clsx from 'clsx'


interface MenuLeftbarProps {
  data: ICity[];
  onClick: (id: number) => void;
  isActive: number;
}

export const MenuLeftbar: FC<MenuLeftbarProps> = memo(({
  data,
  onClick,
  isActive
}: MenuLeftbarProps) => {

  console.log(isActive, ": isActive")

  return (
    <div className={styles.menuLeft}>
      {data.map((item) => {
        return (
          <Button
            customClasses={styles.menuLeftButton}
            type='link'
            key={item.id}
            onClick={() => {
              onClick(item.id)
            }}
          >
            <Typography variant='Body' weight='medium' 
            className={clsx(styles.menuBannerTypography, isActive ? styles.active : styles.default)}>
              {item.city__name}
            </Typography>
          </Button>
        );
      })}
    </div>
  );
});
