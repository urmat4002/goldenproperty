import Search from '../../../shared/ui/search/search';
import { Typography } from '../../../shared/ui/typography/typography';
import style from './hero.module.scss';

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.hero__container}>
        <div className={style.hero__title}>
          <Typography variant="label" weight="regular">
            Найди свой дом мечты вместе с нами!
          </Typography>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
