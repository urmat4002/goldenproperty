import { useEffect, useState } from 'react';
import style from './navbar.module.scss';
import { Typography } from '../../shared/ui/typography/typography';

interface INavbar {
  id: number;
  title: string;
}

const Navbar = () => {
  const [responsible, setResponsible] = useState<INavbar | null>(null);

  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const response = await fetch('http://16.171.129.40/api/v1/staticdata/');
        const data: INavbar = await response.json();
        setResponsible(data);
      } catch (error) {
        console.error('Error fetching navbar data:', error);
      }
    };

    fetchNavbarData();
  }, []);

  console.log(responsible, 'responsible');

  return (
    <nav className={style.nav}>
      <ul role="list" className={style.nav__wrapper}>
        <li className={style.nav__item}>
          <Typography variant="caption" weight="regular">
            Купить
          </Typography>
        </li>
        <li className={style.nav__item}>
          <Typography variant="caption" weight="regular">
            Коммерческая
          </Typography>
        </li>
        <li className={style.nav__item}>
          <Typography variant="caption" weight="regular">
            Разместить объявление
          </Typography>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
