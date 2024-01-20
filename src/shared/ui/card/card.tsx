import { FC } from 'react';
import styles from './card.module.scss';
import { ProductCardProps } from './types/card.types';
import { Typography } from '../typography/typography'
import { ArrowDownToLine, Phone } from 'lucide-react'
import { WhatsApp } from '../icons/whats-app/whats-app'
import { Button } from '../button/button'

export const ProductCard: FC<ProductCardProps> = ({
  image,
  title,
  price,
  geolocation,
}) => {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-image']}>
        <img src={image} alt={title} />
      </div>
      <div className={styles['product-details']}>
        <div className={styles['product-caption']}>
          <Typography variant='h5' weight='bold'>
            {title}
          </Typography>
          <Typography variant='h5' weight='regular'>
            {geolocation}
          </Typography>
          <Typography variant='h5' weight='regular'>
            {price}
          </Typography>
        </div>
        <div className={styles['product-actions']}>
          <Button 
            href={`https://api.whatsapp.com/send/?phone=996700871222&text=${title}`}
            type='icon'
            customClasses={styles['product-button']}>
            <WhatsApp color='black' size={24} />
          </Button>
          <Button type='icon' customClasses={styles['product-button']}>
            <Phone />
          </Button>
          <Button type='icon' customClasses={styles['product-button']}>
            <ArrowDownToLine />
          </Button>
        </div>
      </div>
    </div>
  );
};