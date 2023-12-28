import { Button } from '../../../shared/button/button';
import { WhatsApp } from '../../../shared/icons/whats-app';
import style from './details-room.module.scss';

const DetailsRoom = () => {
  return (
    <div className={style.dr}>
      <div className={style.dr__container}>
        <div className={style.dr__title}>
          <h3>Description</h3>
        </div>
        <div className={style.dr__content}>
          <p className={style.dr__content_text}>
            Lorem ipsum dolor sit amet consectetur. Elit erat pulvinar ullamcorper morbi at amet duis. Feugiat a enim  Elit erat pulvinar ullamcorper morbi at amet duis. Feugiat a enim r risus euismod nec gravida venenatis. Nulla sed malesuada elementum a. Cras sed congue felis pellentesque tellus vulputate Lorem ipsum dolor sit amet consectetur. Elit erat pulvinar ullamcorper morbi at amet duis. Feugiat a enim  Elit erat pulvinar ullamc.
          </p>
          <p className={style.dr__content_text}>
            Lorem ipsum dolor sit amet consectetur. Elit erat pulvinar ullamcorper morbi at amet duis. Feugiat a enim  Elit erat pulvinar ullamcorper morbi at amet duis. Feugiat a enim r risus euismod nec gravida venenatis. Nulla sed malesuada elementum a. Cras sed congue felis pellentesque tellus vulputate Lorem ipsum dolor sit amet consectetur. Elit erat pulvinar ullamcorper morbi at amet duis. Feugiat a enim  Elit erat pulvinar ullamc.
          </p>
        </div>
        <div className={style.dr__caption}>
          <p className={style.dr__caption_text}>Contact us!</p>
          <Button
            types="primary"
            content='WhatsApp'>
            <WhatsApp color='white' size={32}/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DetailsRoom;