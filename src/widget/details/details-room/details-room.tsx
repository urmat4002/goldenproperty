import { Button } from '../../../shared/ui/button/button';
import { WhatsApp } from '../../../shared/ui/icons/whats-app';
import { Typography } from '../../../shared/ui/typography/typography'
import style from './details-room.module.scss';

const DetailsRoom = () => {
  return (
    <div className={style.dr}>
      <div className={style.dr__container}>
        <div className={style.dr__title}>
          <Typography variant='h3' weight='bold'>Description</Typography>
        </div>
        <div className={style.dr__content}>
          <Typography variant='label' weight='regular'>
            Lorem ipsum dolor sit amet consectetur. Elit erat pulvinar
            ullamcorper morbi at amet duis. Feugiat a enim Elit erat pulvinar
            ullamcorper morbi at amet duis. Feugiat a enim r risus euismod nec
            gravida venenatis. Nulla sed malesuada elementum a. Cras sed congue
            felis pellentesque tellus vulputate Lorem ipsum dolor sit amet
            consectetur. Elit erat pulvinar ullamcorper morbi at amet duis.
            Feugiat a enim Elit erat pulvinar ullamc.
          </Typography>
          <Typography variant='label' weight='regular'>
            Lorem ipsum dolor sit amet consectetur. Elit erat pulvinar
            ullamcorper morbi at amet duis. Feugiat a enim Elit erat pulvinar
            ullamcorper morbi at amet duis. Feugiat a enim r risus euismod nec
            gravida venenatis. Nulla sed malesuada elementum a. Cras sed congue
            felis pellentesque tellus vulputate Lorem ipsum dolor sit amet
            consectetur. Elit erat pulvinar ullamcorper morbi at amet duis.
            Feugiat a enim Elit erat pulvinar ullamc.
          </Typography>
        </div>
        <div className={style.dr__caption}>
          <Typography variant='label' weight='regular'>Contact us!</Typography>
          <Button types="primary" content="WhatsApp">
            <WhatsApp color="white" size={32} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailsRoom;
