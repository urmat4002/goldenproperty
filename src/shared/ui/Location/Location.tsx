import { MapPin } from 'lucide-react';
import { FC } from 'react';
import { Typography } from '../Typography/Typography';
import style from './Location.module.scss';

interface LocationProps {
  place: string | undefined;
}

export const Location: FC<LocationProps> = ({ place }) => {
  return (
    <div className={style.locate}>
      <MapPin />
      <Typography variant="label" weight="regular">
        {place}
      </Typography>
    </div>
  );
};
