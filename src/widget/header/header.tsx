import { FC } from 'react';
import style from './header.module.scss';
import Navbar from '../../entities/navbar/navbar';
import { Button } from '../../shared/button/button';
import { WhatsApp } from '../../shared/icons/whats-app';
import { GuldemLogo } from '../../shared/icons/guldem-logo';


const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <GuldemLogo />
        </div>
        <Navbar />
        <div className={style.header__options}>
          <Button
            types="primary"
            content='Связатся с нами'>
            <WhatsApp color='white' size={32}/>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header