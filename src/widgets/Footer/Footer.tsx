import { LogoFooter } from "@/shared/ui/Icons/LogoFooter";
import styles from "./Footer.module.scss";
import { Geeks } from "@/shared/ui/Icons/Geeks";
import { Mail, Phone } from "lucide-react";
import { Typography, WhatsApp, Facebook, Instagram, Button } from "@/shared/ui";
// import {
//   useGetCities,
//   useGetEstateTypes,
//   useGetStaticHeader,
// } from "@/shared/api/hooks";

export const Footer = () => {
  // const { cities } = useGetCities();
  // const { types } = useGetEstateTypes();
  // const { pages } = useGetStaticHeader();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <LogoFooter />
          </div>
          <div className={styles.footerNavigate}>
            <ul data-title={"Город"} className={styles.footerOption}>
              <li>
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    Дубай
                  </Typography>
                </Button>
              </li>
              <li>
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    Анталья
                  </Typography>
                </Button>
              </li>
              <li>
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    Стамбул
                  </Typography>
                </Button>
              </li>
            </ul>
            <ul data-title={"Тип"} className={styles.footerOption}>
              <li>
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    Виллы
                  </Typography>
                </Button>
              </li>
              <li>
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    Квартиры
                  </Typography>
                </Button>
              </li>
              <li>
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    Дуплексы
                  </Typography>
                </Button>
              </li>
              <li>
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    Участки
                  </Typography>
                </Button>
              </li>
              <li>
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    Магазины
                  </Typography>
                </Button>
              </li>
            </ul>
            <ul data-title={"Страница"} className={styles.footerOption}>
              <li>
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    Вся недвижимость
                  </Typography>
                </Button>
              </li>
              <li>
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    О нас
                  </Typography>
                </Button>
              </li>
              <li>
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    Разместить объявление
                  </Typography>
                </Button>
              </li>
            </ul>
            <ul data-title={"Связаться с нами"} className={styles.footerOption}>
              <li>
                <Mail />
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    info@Gulsdem.com
                  </Typography>
                </Button>
              </li>
              <li>
                <Phone />
                <Button type="link" customClasses={styles.footerLink}>
                  <Typography
                    variant="body"
                    className={styles.footerTypography}
                  >
                    +90(212)67890900
                  </Typography>
                </Button>
              </li>
            </ul>
            <div className={styles.footerIcons}>
              <Button type="link" customClasses={styles.footerLink}>
                <Facebook />
              </Button>
              <Button type="link" customClasses={styles.footerLink}>
                <Instagram />
              </Button>
              <Button type="link" customClasses={styles.footerLink}>
                <WhatsApp />
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <a
            href="https://www.instagram.com/geeks_pro/?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA%3D%3D"
            className={styles.footerBottomLink}
          >
            Made by GeeksPro
            <Geeks />
          </a>
        </div>
      </div>
    </footer>
  );
};
