import { Download, PhoneCall } from 'lucide-react';
import { WhatsApp } from '../icons/whats-app';
import { Location } from '../../entities/location/location';
import style from './card.module.scss';

export const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src='' alt=''/>
      </div>
      <div className={style.card__content}>
        <div className={style.card__content_top}>
          <h4 className={style.card__title}>Serena Living Tower</h4>
          <Location place='Serenia Living' />
          <span className={style.card__type}>
            <p>Penthaus</p>
          </span>
        </div>
        <div className={style.card__divider} />
        <div className={style.card__content_bottom}>
          <span className={style.card__price}>
            <p>AED</p>
            <p>159,000,000</p>
          </span>
          <div className={style.card__button_wrapper}>
            <div className={style.card__button}>
              <WhatsApp size={24} color='black' />
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
  )
}
