import { ArrowDownToLine, Phone } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/ui/Button/Button';
import { Typography } from '../../shared/ui/Typography/Typography';
import styles from './Card.module.scss';
import { ProductCardProps } from './types/Card.types';

export const ProductCard: FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  geolocation,
}) => {
  return (
    <Link to={`/assortment/${id}`}>
      <div className={styles['product-card']}>
        <div className={styles['product-image']}>
          <img src={image} alt={title} />
        </div>
        <div className={styles['product-details']}>
          <div className={styles['product-caption']}>
            <Typography variant='Body' weight="bold">
              {title}
            </Typography>
            <Typography variant="Body" weight="regular">
              {geolocation}
            </Typography>
            <Typography variant="Body" weight="regular">
              {price}
            </Typography>
          </div>
          <div className={styles['product-actions']}>
            <Button
              href={`https://api.whatsapp.com/send/?phone=996700871222&text=${title}`}
              type="icon"
              customClasses={styles['product-button']}
            ></Button>
            <Button type="icon" customClasses={styles['product-button']}>
              <Phone />
            </Button>
            <Button type="icon" customClasses={styles['product-button']}>
              <ArrowDownToLine />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
