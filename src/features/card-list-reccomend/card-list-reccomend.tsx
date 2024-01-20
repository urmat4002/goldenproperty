import { ProductCard } from '../../shared/ui/card/card';
import { ProductCardProps } from '../../shared/ui/card/types/card.types';
import style from './card-list-reccomend.module.scss';

const CardListReccomend = () => {
  const db: ProductCardProps[] = [
    {
      title: 'Serena Living Tower',
      price: '$5000',
      geolocation: 'İstanbul',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: "Avrupa ve Asya'nın kucaklaştığı ",
      price: '$1200000',
      geolocation: 'Ankara',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  return (
    <div className={style.clr}>
      {db.map((item) => (
        <ProductCard
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
