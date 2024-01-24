import Search from '../../../shared/ui/search/search';
import { Typography } from '../../../shared/ui/typography/typography';
import style from './hero.module.scss';
import data from './data/hero.db.json';

const Hero = () => {
  return (
    <div className={style.hero}>
      <img src={data.img} alt={''} className={style.hero__img} />
      <div className={style.hero__container}>
        <div className={style.hero__title}>
          <Typography variant="h1" weight="bold">
            Найди свой дом мечты вместе с нами!
          </Typography>
        </div>
        <div className={style.hero__search}>
          <Search />
        </div>
        i
      </div>
    </div>
  );
};

export default Hero;
