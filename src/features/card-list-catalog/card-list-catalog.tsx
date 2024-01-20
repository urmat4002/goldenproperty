import { ProductCard } from '../../shared/ui/card/card';
import { ProductCardProps } from '../../shared/ui/card/types/card.types'
import style from './card-list-catalog.module.scss';

const CardListCatalog = () => {
  const db: ProductCardProps[] = [
    {
      title: 'Serena Living Tower',
      price: '$5000',
      geolocation: 'İstanbul',
      image: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: "Avrupa ve Asya'nın kucaklaştığı ",
      price: '$1200000',
      geolocation: 'Ankara',
      image: 'https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className={style.cl}>
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

export default CardListCatalog;
