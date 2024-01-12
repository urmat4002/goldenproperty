import { FC } from 'react';
import style from './header.module.scss';
import Navbar from '../../features/navbar/navbar';
import { Button } from '../../shared/button/button';
import { WhatsApp } from '../../shared/icons/whats-app';
import { GuldemLogo } from '../../shared/icons/guldem-logo';
import { LangSelect } from '../../shared/lang-select/lang-select';

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <GuldemLogo />
        </div>
        <Navbar />
        <div className={style.header__options}>
          <LangSelect />
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
