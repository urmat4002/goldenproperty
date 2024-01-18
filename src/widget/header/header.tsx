import { FC } from 'react';
import Navbar from '../../features/navbar/navbar';
import { Button } from '../../shared/ui/button/button';
import { GuldemLogo } from '../../shared/ui/icons/guldem-logo/guldem-logo';
import { NavMenu } from '../../shared/ui/icons/nav-menu/nav-menu';
import { WhatsApp } from '../../shared/ui/icons/whats-app';
import style from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <GuldemLogo />
        </div>
        <Navbar />
        <div className={style.header__options}>
          <NavMenu />
          <Button
            href="https://api.whatsapp.com/send/?phone=996700871222&text=Здравствуйте%2C+у+меня+есть+вопрос"
            type="link"
            types="primary"
            content="Связатся с нами"
          >
            <WhatsApp color="white" size={32} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
