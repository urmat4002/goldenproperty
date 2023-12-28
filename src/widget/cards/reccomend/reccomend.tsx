import { Card } from '../../../shared/card/card';
import style from './reccomend.module.scss';

const Reccomend = () => {
  return (
    <div className={style.reccomend}>
      <div className={style.reccomend__container}>
        <div className={style.reccomend__title}>
          <h3>You might like</h3>
        </div>
        <div className={style.reccomend__wrapper}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Reccomend