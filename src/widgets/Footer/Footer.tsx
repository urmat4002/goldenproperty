import { LogoFooter } from "@/shared/ui/Icons/LogoFooter";
import styles from "./Footer.module.scss";
import { Geeks } from "@/shared/ui/Icons/Geeks";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Typography, WhatsApp } from "@/shared/ui";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <LogoFooter />
          </div>
          <div className={styles.footerNavigate}>
            <ul className={styles.footerOption}>
              <li>
                <Typography variant="body" weight="bold">
                  Город
                </Typography>
              </li>
              <li>
                <Typography variant="body">Дубай</Typography>
              </li>
              <li>
                <Typography variant="body">Анталья</Typography>
              </li>
              <li>
                <Typography variant="body">Стамбул</Typography>
              </li>
            </ul>
            <ul className={styles.footerOption}>
              <li>
                <Typography variant="body" weight="bold">
                  Тип
                </Typography>
              </li>
              <li>
                <Typography variant="body">Виллы</Typography>
              </li>
              <li>
                <Typography variant="body">Квартиры</Typography>
              </li>
              <li>
                <Typography variant="body">Дуплексы</Typography>
              </li>
              <li>
                <Typography variant="body">Участки</Typography>
              </li>
              <li>
                <Typography variant="body">Магазины</Typography>
              </li>
            </ul>
            <ul className={styles.footerOption}>
              <li>
                <Typography variant="body" weight="bold">
                  Страница
                </Typography>
              </li>
              <li>
                <Typography variant="body">Вся недвижимость</Typography>
              </li>
              <li>
                <Typography variant="body">О нас</Typography>
              </li>
              <li>
                <Typography variant="body">Разместить объявление</Typography>
              </li>
            </ul>
            <ul className={styles.footerOption}>
              <li>
                <Typography variant="body" weight="bold">
                  Связаться с нами
                </Typography>
              </li>
              <li>
                <Mail strokeWidth={1} size={24} />
                <Typography variant="body">info@Gulsdem.com</Typography>
              </li>
              <li>
                <Phone strokeWidth={1} size={24} />
                <Typography variant="body">+90(212)67890900</Typography>
              </li>
              <li className={styles.icons}>
                <Facebook strokeWidth={1} size={24} />
                <Instagram strokeWidth={1} size={24} />
                <WhatsApp />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <a
            href="https://www.instagram.com/geeks_pro/?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA%3D%3D"
            className={styles.footerLink}
          >
            Made by Geeks
            <Geeks />
          </a>
        </div>
      </div>
    </footer>
  );
};

