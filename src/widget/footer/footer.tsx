import { Mail, Phone, Facebook, Instagram } from 'lucide-react';
import style from './footer.module.scss';
import { WhatsApp } from '../../shared/icons/whats-app';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <h1>Gulsdem</h1>
        <div className={style.footer__center}>
          <div>
            <ul>
              <li>Dubai</li>
              <li>Istanbul</li>
              <li>Antalya</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Villas</li>
              <li>Apartments</li>
              <li>Duplexes</li>
              <li>Plots</li>
              <li>Stores</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Buy</li>
              <li>Commercial</li>
              <li>Place an ad</li>
            </ul>
          </div>
        </div>
        <div className={style.footer__right}>
          <div className={style.footer__link}>
            <h2>Contact us:</h2>
            <a href="info@gulsdem.com">
              <Mail />
              <span>info@gulsdem.com</span>
            </a>
            <a href="tel:9021267890900">
              <Phone />
              <span>+90 (212) 67890900</span>
            </a>
          </div>
          <div className={style.footer__contact}>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <WhatsApp color="white" size={28}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;