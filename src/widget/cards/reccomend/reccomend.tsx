import CardListReccomend from '../../../features/card-list-reccomend/card-list-reccomend';
import style from './reccomend.module.scss';

const Reccomend = () => {
  return (
    <div className={style.reccomend}>
      <div className={style.reccomend__container}>
        <div className={style.reccomend__title}>
          <h3>You might like</h3>
        </div>
        <div className={style.reccomend__wrapper}>
          <CardListReccomend />
        </div>
      </div>
    </div>
  );
};

export default Reccomend;
