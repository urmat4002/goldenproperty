import { Download, PhoneCall } from 'lucide-react';
import { FC } from 'react';
import { Location } from '../../../entities/location/location';
import { Button } from '../button/button';
import { WhatsApp } from '../icons/whats-app';
import style from './card.module.scss';
import { CardProps } from './types/card.types';
import { Typography } from '../typography/typography'

export const Card: FC<CardProps> = (props) => {
  const { title, location, price, img, type } = props;
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={img} alt={title} />
      </div>
      <div className={style.card__content}>
        <div className={style.card__content_top}>
          <Typography variant='h4' weight='regular'>
            Serena Living Tower
          </Typography>

          <Location place={location} />
          <span className={style.card__type}>
            <p>{type}</p>
          </span>
        </div>
        <div className={style.card__divider} />
        <div className={style.card__content_bottom}>
          <span className={style.card__price}>
            <p>{price}</p>
          </span>
          <div className={style.card__button_wrapper}>
            <div className={style.card__button}>
              <Button
                href={`https://api.whatsapp.com/send/?phone=996700871222&text=${title}`}
                type="link"
                types="link"
              >
                <WhatsApp size={24} color="black" />
              </Button>
            </div>
            <div className={style.card__button}>
              <Button href="tel:+996111111111 " type="link" types="link">
                <PhoneCall />
              </Button>
            </div>
            <div className={style.card__button}>
              <Button href="catalog.pdf" type="link" types="link">
                <Download />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
