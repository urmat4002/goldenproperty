import { ProductCard } from '../../shared/ui/card/card';
import style from './card-list-reccomend.module.scss';
import db from '../../app/data/db.json';

const CardListReccomend = () => {
  return (
    <div className={style.clr}>
      {db.map((item) => (
        <ProductCard
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          geolocation={item.geolocation}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default CardListReccomend;
