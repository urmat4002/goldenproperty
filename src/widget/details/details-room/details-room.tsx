import { Typography } from '../../../shared/ui/typography/typography';
import style from './details-room.module.scss';

const DetailsRoom = () => {
  return (
    <div className={style.dr}>
      <div className={style.dr__container}>
        <div className={style.dr__description}>
          <div className={style.dr__title}>
            <Typography variant="h3" weight="bold">
              Features & Amenites
            </Typography>
          </div>
          <div className={style.dr__content}>
            <div className={style.dr__list}>
              <Typography variant="label" weight="regular">
                Treadmills
              </Typography>
              <Typography variant="label" weight="regular">
                Pool
              </Typography>
              <Typography variant="label" weight="regular">
              Balcony
              </Typography>
              <Typography variant="label" weight="regular">
              Green spaces
              </Typography>
              <Typography variant="label" weight="regular">
              BBQ Area
              </Typography>
              <Typography variant="label" weight="regular">
              Tennis court
              </Typography>
            </div>
            <div className={style.dr__list}>
              <Typography variant="label" weight="regular">
              Boutiques and shops
              </Typography>
              <Typography variant="label" weight="regular">
              Security and video surveillance
              </Typography>
              <Typography variant="label" weight="regular">
              Children polyground
              </Typography>
              <Typography variant="label" weight="regular">
              Fitness center and gym 
              </Typography>
              <Typography variant="label" weight="regular">
              Sports grounds
              </Typography>
              <Typography variant="label" weight="regular">
              Parking space
              </Typography>
            </div>
          </div>
        </div>
        <div className={style.dr__description}>
          <div className={style.dr__title}>
            <Typography variant="h3" weight="bold">
              Description
            </Typography>
          </div>
          <div className={style.dr__wrapper}>
            <Typography variant="label" weight="regular">
              Introducing Aqua Dimore, a contemporary residential building in
              Science Park that symbolizes elegance and innovation.
            </Typography>
            <Typography variant="label" weight="regular">
            ✅ Installment plan for 5 years!
            </Typography>
            <Typography variant="label" weight="regular">
            ✅Pay only 1% per month
            </Typography>
            <Typography variant="label" weight="regular">
            ✅8% guaranteed income during the construction period
            </Typography>
            <Typography variant="label" weight="regular">
            ✅ 8-10% plus annual rental income after project completion
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsRoom;
