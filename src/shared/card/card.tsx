import { Download, PhoneCall } from 'lucide-react';
import { FC } from 'react';
import { Location } from '../../entities/location/location';
import { WhatsApp } from '../icons/whats-app';
import style from './card.module.scss';
import { CardProps } from './types/card.types';

export const Card: FC<CardProps> = ({ title, location, price, img, type }) => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={img} alt={title} />
      </div>
      <div className={style.card__content}>
        <div className={style.card__content_top}>
          <h4 className={style.card__title}>Serena Living Tower</h4>
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
              <WhatsApp size={24} color="black" />
            </div>
            <div className={style.card__button}>
              <PhoneCall />
            </div>
            <div className={style.card__button}>
              <Download />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
