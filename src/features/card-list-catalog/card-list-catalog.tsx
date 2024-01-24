import { ProductCard } from '../../shared/ui/card/card';
import style from './card-list-catalog.module.scss';
import db from '../../app/data/db.json';

const CardListCatalog = () => {
  return (
    <div className={style.cl}>
      {db.map((item) => (
        <ProductCard
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          geolocation={item.geolocation}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default CardListCatalog;
