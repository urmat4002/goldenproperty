import { Download } from 'lucide-react';
import style from './hero-room.module.scss';
import { Typography } from '../../../shared/ui/typography/typography';
import { Button } from '../../../shared/ui/button/button';
import { useParams } from 'react-router-dom';
import db from '../../../app/data/db.json';
import { ProductCardProps } from '../../../shared/ui/card/types/card.types';
import { useEffect, useState } from 'react';

const HeroRoom = () => {
  const { id } = useParams<{ id: string }>();
  const [object, setObject] = useState<ProductCardProps | undefined>(undefined);

  useEffect(() => {
    const foundObject = db.find((item) => String(id) === String(item.id));

    if (foundObject) {
      setObject(foundObject);
    }
  }, [id]) 

  console.log(object)

  return (
    <div className={style.hr}>
      <div className={style.hr__container}>
        <div className={style.hr__wrapper}>
          <div className={style.hr__images}>
            <img src={object?.image} alt="" />
          </div>
          <div className={style.hr__right}>
            <Typography variant='h4' weight='bold'>
              Список характеристик
            </Typography>
            <div className={style.hr__option}>
              <span className={style.hr__option_item}>
                <Typography variant='label' weight='regular'>
                  Локация
                </Typography>
                <Typography variant='label' weight='regular'>
                  {object?.title}
                </Typography>
              </span>
              <span className={style.hr__option_item}>
                <Typography variant='label' weight='regular'>
                  Цена:
                </Typography>
                <Typography variant='label' weight='regular'>
                  {object?.price}
                </Typography>
              </span>
              <span className={style.hr__option_item}>
                <Typography variant='label' weight='regular'>
                  Меблировано:
                </Typography>
                <Typography variant='label' weight='regular'>
                  {object?.furnished}
                </Typography>
              </span>
              <span className={style.hr__option_item}>
                <Typography variant='label' weight='regular'>
                  Тип недвижимости:
                </Typography>
                <Typography variant='label' weight='regular'>
                  {object?.prototype}
                </Typography>
              </span>
              <span className={style.hr__option_item}>
                <Typography variant='label' weight='regular'>
                  Статус выполнение:
                </Typography>
                <Typography variant='label' weight='regular'>
                {object?.completion}
                </Typography>
              </span>
            </div>
            <Button type="primary" iconPosition="right">
            Download catalogue
            <Download />
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRoom;
