import style from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul role='list' className={style.nav__wrapper}>
        <li className={style.nav__item}>Купить</li>
        <li className={style.nav__item}>Коммерческая</li>
        <li className={style.nav__item}>Разместить объявление</li>
      </ul>
    </nav>
  )
}

export default Navbar;