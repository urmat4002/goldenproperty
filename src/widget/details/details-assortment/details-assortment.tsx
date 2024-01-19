import { Typography } from '../../../shared/ui/typography/typography';
import style from './details-assortment.module.scss';

const DetailsAssortment = () => {
  return (
    <div className={style.da}>
      <div className={style.da__container}>
        <div className={style.da__content}>
          <Typography variant="label" weight="regular">
            Lorem ipsum dolor sit amet consectetur. Elit erat pulvinar
            ullamcorper morbi at amet duis. Feugiat a enim Elit erat pulvinar
            ullamcorper morbi at amet duis. Feugiat a enim r risus euismod nec
            gravida venenatis. Nulla sed malesuada elementum a. Cras sed congue
            felis pellentesque tellus vulputate Lorem ipsum dolor sit amet
            consectetur. Elit erat pulvinar ullamcorper morbi at amet duis.
            Feugiat a enim Elit erat pulvinar ullamc.
          </Typography>
          <Typography variant="label" weight="regular">
            Lorem ipsum dolor sit amet consectetur. Elit erat pulvinar
            ullamcorper morbi at amet duis. Feugiat a enim Elit erat pulvinar
            ullamcorper morbi at amet duis. Feugiat a enim r risus euismod nec
            gravida venenatis. Nulla sed malesuada elementum a. Cras sed congue
            felis pellentesque tellus vulputate Lorem ipsum dolor sit amet
            consectetur. Elit erat pulvinar ullamcorper morbi at amet duis.
            Feugiat a enim Elit erat pulvinar ullamc.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DetailsAssortment;
