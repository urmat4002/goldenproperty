import { AlignLeft } from 'lucide-react'
import { Typography } from '../../../shared/ui/typography/typography';
import style from './image-grid-home.module.scss';

const ImageGridHome = () => {
  return (
    <div className={style['igh']}>
      <div className={style['igh__container']}>
        <div className={style['igh__title']}>
          <Typography variant="h2" weight="bold">
            Наши объекты
          </Typography>
        </div>
        <div className={style['igh__img']}>
          <div className={style['igh__img_item_pc']}>
            <img src="" alt="" />
            <Typography variant="h3" weight="bold">
              Dubai
            </Typography>
          </div>
          <div className={style['igh__img_wrapper']}>
            <div className={style['igh__img_item']}>
              <img src="" alt="" />
              <Typography variant="h3" weight="bold">
                Antalya
              </Typography>
            </div>
            <div className={style['igh__img_item_mb']}>
              <img src="" alt="" />
              <Typography variant="h3" weight="bold">
                Dubai
              </Typography>
            </div>
            <div className={style['igh__img_item']}>
              <img src="" alt="" />
              <Typography variant="h3" weight="bold">
                Istanbul
              </Typography>
            </div>
          </div>
        </div>
        <div className={style['igh__left_right']}>
          <div className={style['igh__left']}>
            <AlignLeft />
          </div>
          <div className={style['igh__right']}>
            <AlignLeft />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGridHome;
