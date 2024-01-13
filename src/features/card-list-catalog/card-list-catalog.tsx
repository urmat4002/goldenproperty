import { Card } from '../../shared/card/card';
import { CardProps } from '../../shared/card/types/card.types';
import style from './card-list-catalog.module.scss';

const CardListCatalog = () => {
  const db: CardProps[] = [
    {
      id: 0,
      title: 'Serena Living Tower',
      price: '$5000',
      location: 'İstanbul',
      type: 'Villa',
      img: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 1,
      title: "Avrupa ve Asya'nın kucaklaştığı ",
      price: '$1200000',
      location: 'Ankara',
      type: 'Penthouse',
      img: 'https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className={style.cl}>
      {db.map((item) => (
        <Card
          title={item.title}
          img={item.img}
          price={item.price}
          location={item.location}
          type={item.type}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default CardListCatalog;
