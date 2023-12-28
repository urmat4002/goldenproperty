import Search from '../../shared/search/search';
import style from './hero.module.scss';

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.hero__container}>
        <div className={style.hero__title}>
          <p>Найди свой дом мечты вместе с нами!</p>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
