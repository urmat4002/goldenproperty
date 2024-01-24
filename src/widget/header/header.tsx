import { FC } from 'react';
import Navbar from '../../features/navbar/navbar';
import { Button } from '../../shared/ui/button/button';
import { GuldemLogo } from '../../shared/ui/icons/guldem-logo/guldem-logo';
import { WhatsApp } from '../../shared/ui/icons/whats-app/whats-app';
import style from './header.module.scss';
import { Link } from 'react-router-dom';
import { LangSelect } from '../../shared/ui/lang-select/lang-select';

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <Link to="/">
            <GuldemLogo />
          </Link>
        </div>
        <Navbar />
        <div className={style.header__options}>
          <div className={style.header__lang}>
            <LangSelect />
          </div>
          <div className={style.header__whatsapp}>
            <Button
              href="https://api.whatsapp.com/send/?phone=996700871222&text=Здравствуйте%2C+у+меня+есть+вопрос"
              type="link"
              iconPosition="left"
            >
              <WhatsApp color="white" size={32} />
               <p>Связатся с нами</p>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
