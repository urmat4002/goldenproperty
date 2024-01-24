import { Typography } from '../../../shared/ui/typography/typography';
import style from './details-home.module.scss';

const DetailsHome = () => {
  return (
    <div className={style.details}>
      <div className={style.details__container}>
        <div className={style.details__title}>
          <Typography variant="h3" weight="bold">
            Преимущества Golden house
          </Typography>
        </div>
        <div className={style.details__content}>
          <Typography variant="label" weight="regular">
            Наша компания предлагает широкий выбор недвижимости от эксклюзивных
            квартир до загородных домов.
          </Typography>
          <Typography variant="label" weight="regular">
            Эксклюзивные предложения, виртуальные туры, консультации экспертов –
            все, чтобы сделать процесс выбора недвижимости удобным и
            увлекательным.
          </Typography>
          <Typography variant="label" weight="regular">
            Мы гарантируем конфиденциальность ваших данных и сотрудничаем только
            с проверенными агентами и продавцами.
          </Typography>
          <Typography variant="label" weight="regular">
            Если вам нужна помощь в управлении вашей недвижимостью, мы
            предоставляем услуги по управлению арендой, гарантируя, что ваша
            собственность получит максимальную ценность и уход.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DetailsHome;
