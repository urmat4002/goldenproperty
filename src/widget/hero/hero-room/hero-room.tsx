import { Download } from 'lucide-react';
import { Location } from '../../../entities/location/location';
import style from './hero-room.module.scss';
import { Typography } from '../../../shared/ui/typography/typography'
import { Button } from '../../../shared/ui/button/button'

const HeroRoom = () => {
  return (
    <div className={style.hr}>
      <div className={style.hr__container}>
        <div className={style.hr__wrapper}>
          <div className={style.hr__title}>
            <Typography variant='h2' weight='bold'>Serena Living Tower</Typography>
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
            <Typography variant='label' weight='regular'>Penthaus</Typography>
          </span>
          <Button>
            Download catalogue
            <Download />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroRoom;