import { Typography } from '../../../shared/ui/typography/typography'
import style from './details-bottom.module.scss';

const DetailsBottom = () => {
  return (
    <div className={style.db}>
      <div className={style.db__container}>
        <div className={style.db__title}>
          <Typography variant='h2' weight='bold'>
            Istanbul Property for Sale
          </Typography>
        </div>
        <div className={style.db__content}>
          <Typography variant='label' weight='regular'>
            Lorem ipsum dolor sit amet consectetur. Elit erat pulvinar ullamcorper morbi at amet duis. Feugiat a enim  Elit erat pulvinar ullamcorper morbi at amet duis. Feugiat a enim r risus euismod nec gravida venenatis. Nulla sed malesuada elementum a. Cras sed congue felis pellentesque tellus vulputate Lorem ipsum dolor sit amet consectetur. Elit erat pulvinar ullamcorper morbi at amet duis. Feugiat a enim  Elit erat pulvinar ullamc.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default DetailsBottom;