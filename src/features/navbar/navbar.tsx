import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '../../shared/ui/Typography/Typography';
import style from './Navbar.module.scss';

interface INavbar {
  id: number;
  title: string;
}

const Navbar = () => {
  const [responsible] = useState<INavbar | null>(null);

  return (
    <nav className={style.nav}>
      <ul role="list" className={style.nav__wrapper}>
        <li className={style.nav__item}>
          <Typography
            variant="Caption1"
            weight="regular"
            className={style.nav__text}
          >
            Купить
          </Typography>
        </li>
        <li className={style.nav__item}>
          <Typography
            variant="Caption1"
            weight="regular"
            color="white"
            className={style.nav__text}
          >
            <Link to="/assortment">Вся недвижимость</Link>
          </Typography>
        </li>
        <li className={style.nav__item}>
          <Typography
            variant="Caption1"
            weight="regular"
            color="white"
            className={style.nav__text}
          >
            Разместить объявление
          </Typography>
        </li>
        <li className={style.nav__item}>Lang</li>
      </ul>
    </nav>
  );
};

export default Navbar;
