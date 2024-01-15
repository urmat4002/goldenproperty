import { useEffect, useState } from 'react';
import style from './navbar.module.scss';

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
        <li className={style.nav__item}>Купить</li>
        <li className={style.nav__item}>Коммерческая</li>
        <li className={style.nav__item}>Разместить объявление</li>
      </ul>
    </nav>
  );
};

export default Navbar;
