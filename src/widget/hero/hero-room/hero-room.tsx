import { Download } from 'lucide-react';
import { Location } from '../../../entities/location/location';
import style from './hero-room.module.scss';

const HeroRoom = () => {
  return (
    <div className={style.hr}>
      <div className={style.hr__container}>
        <div className={style.hr__wrapper}>
          <div className={style.hr__title}>
            <h2>Serena Living Tower</h2>
          </div>
          <div className={style.hr__images}>
            <div className={style.hr__images__main}>
              <img src='' alt='' />
            </div>
            <div className={style.hr__images__wrapper}>
              <div className={style.hr__images__item}>
                <img src='' alt=''/>
              </div>
              <div className={style.hr__images__item}>
                <img src='' alt=''/>
              </div>
            </div>
          </div>
        </div>
        <div className={style.hr__bottom}>
          <Location place='Serenia Living' />
          <span className={style.hr__type}>
            <p>Penthaus</p>
          </span>
          <button className={style.hr__download}>
            Download catalogue
            <Download />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroRoom;