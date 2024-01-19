import { FC } from 'react';
import Navbar from '../../features/navbar/navbar';
import { Button } from '../../shared/ui/button/button';
import { GuldemLogo } from '../../shared/ui/icons/guldem-logo/guldem-logo';
import { WhatsApp } from '../../shared/ui/icons/whats-app/whats-app';
import style from './header.module.scss';
import { Menu } from 'lucide-react'

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <GuldemLogo />
        </div>
        <Navbar />
        <div className={style.header__options}>
          <Menu />
          <Button
            href="https://api.whatsapp.com/send/?phone=996700871222&text=Здравствуйте%2C+у+меня+есть+вопрос"
            type="link"
            iconPosition="left"
          >
            <WhatsApp color="white" size={32} />
            Связатся с нами
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
