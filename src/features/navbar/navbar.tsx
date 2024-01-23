import { useState } from 'react';
import style from './navbar.module.scss';
import { Typography } from '../../shared/ui/typography/typography';
import { Link } from 'react-router-dom';
import { LangSelect } from '../../shared/ui/lang-select/lang-select'

interface INavbar {
  id: number;
  title: string;
}

const Navbar = () => {
  const [responsible, ] = useState<INavbar | null>(null);

  console.log(responsible, 'responsible');

  return (
    <nav className={style.nav}>
      <ul role="list" className={style.nav__wrapper}>
        <li className={style.nav__item}>
          <Typography
            variant="caption"
            weight="regular"
            className={style.nav__text}
          >
            Купить
          </Typography>
        </li>
        <li className={style.nav__item}>
          <Typography
            variant="caption"
            weight="regular"
            color="white"
            className={style.nav__text}
          >
            <Link to="/assortment">Вся недвижимость</Link>
          </Typography>
        </li>
        <li className={style.nav__item}>
          <Typography
            variant="caption"
            weight="regular"
            color="white"
            className={style.nav__text}
          >
            Разместить объявление
          </Typography>
        </li>
        <li className={style.nav__item}>
          <LangSelect />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
