import { MapPin } from 'lucide-react';
import style from './location.module.scss';
import { FC } from 'react';

interface LocationProps {
  place: string;
}

export const Location: FC<LocationProps> = ({ place }) => {
  return (
    <div className={style.locate}>
      <MapPin />
      <p className={style.locate__text}>
        { place }
      </p>
    </div>
  )
}
