import { FC } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../features/Navbar/Navbar';
import { Button } from '../../shared/ui/Button/Button';
import style from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <Link to="/">Logo</Link>
        </div>
        <Navbar />
        <div className={style.header__options}>
          <div className={style.header__lang}>Lang</div>
          <div className={style.header__whatsapp}>
            <Button
              href="https://api.whatsapp.com/send/?phone=996700871222&text=Здравствуйте%2C+у+меня+есть+вопрос"
              type="link"
              iconPosition="left"
            >
              WhatsApp
              <p>Связатся с нами</p>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
