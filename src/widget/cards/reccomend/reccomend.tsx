import CardListReccomend from '../../../features/card-list-reccomend/card-list-reccomend';
import { Typography } from '../../../shared/ui/typography/typography';
import style from './reccomend.module.scss';

const Reccomend = () => {
  return (
    <div className={style.reccomend}>
      <div className={style.reccomend__container}>
        <div className={style.reccomend__title}>
          <Typography variant="h3" weight="bold">
            You might like
          </Typography>
        </div>
        <div className={style.reccomend__wrapper}>
          <CardListReccomend />
        </div>
      </div>
    </div>
  );
};

export default Reccomend;
