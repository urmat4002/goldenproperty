import { FC } from 'react';
import { ICity } from '../types/MenuDropDown.types';
import { Button, Typography } from '@/shared/ui'
import styles from './MenuLeftbar.module.scss';


interface MenuLeftbarProps {
  data: ICity[];
  onClick: (id: number) => void
}

export const MenuLeftbar: FC<MenuLeftbarProps> = ({
  data,
  onClick
}: MenuLeftbarProps) => {

  return (
    <div className={styles.menuLeft}>
      {data.map((item) => {
        return (
          <Button
            customClasses={styles.menuLeftButton}
            type='secondary'
            key={item.id}
            onClick={() => onClick(item.id)}
          >
            <Typography variant='Caption1' weight='medium'>
              {item.city__name}
            </Typography>
          </Button>
        );
      })}
    </div>
  );
};
