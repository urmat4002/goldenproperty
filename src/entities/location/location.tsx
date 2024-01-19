import { MapPin } from 'lucide-react';
import style from './location.module.scss';
import { FC } from 'react';
import { Typography } from '../../shared/ui/typography/typography'

interface LocationProps {
  place: string;
}

export const Location: FC<LocationProps> = ({ place }) => {
  return (
    <div className={style.locate}>
      <MapPin />
      <Typography variant='caption' weight='regular'>
        { place }
      </Typography>
    </div>
  )
}
