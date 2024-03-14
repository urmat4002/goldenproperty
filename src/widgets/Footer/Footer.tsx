import { FC } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { LogoFooter } from "@/shared/ui/Icons/LogoFooter";
import { Geeks } from "@/shared/ui/Icons/Geeks";
import { Typography, WhatsApp, Facebook, Instagram } from "@/shared/ui";
import { capitalize as cap } from "@/shared/helper/utils";
import {
  useGetCities,
  useGetCompany,
  useGetEstateTypes,
  useGetStaticData,
  useGetStaticHeader,
  useWhatsApp,
} from "@/shared/api/hooks";
import { useModalContext } from "@/app/providers/useModalContext";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  const { sellEstate } = useModalContext();
  const { whatsappUrl } = useWhatsApp();
  const { data: cities } = useGetCities();
  const { data: types } = useGetEstateTypes();
  const { data: pages } = useGetStaticHeader();
  const { staticData } = useGetStaticData();
  const { company } = useGetCompany();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <LogoFooter />
          </div>
          <div className={styles.footerNavigate}>
            <ul
              data-title={`${cap(staticData?.footer.cities)}`}
              className={styles.footerOption}
            >
              {cities?.cities.map((city) => {
                return (
                  <FooterLink
                    key={city.id}
                    to={`/estates/?city=${city.id}`}
                    label={city.city_name}
                  />
                );
              })}
            </ul>
            <ul
              data-title={`${cap(staticData?.footer.estate_types)}`}
              className={styles.footerOption}
            >
              {types?.estate_types.map((type) => {
                return (
                  <FooterLink
                    key={type.id}
                    to={`/estates/?type=${type.id}`}
                    label={type.type}
                  />
                );
              })}
            </ul>
            <ul
              data-title={`${cap(staticData?.footer.pages)}`}
              className={styles.footerOption}
            >
              <FooterLink
                to={"/estates"}
                label={pages?.header.all_real_estates || "Estates"}
              />
              <FooterLink
                to={"/about-us"}
                label={pages?.header.about_us || "About us"}
              />
              <li>
                <button onClick={sellEstate}>
                  <Typography
                    variant="body"
                    capitalize
                    className={styles.footerTypography}
                  >
                    {pages?.header.place_ad || "Sell"}
                  </Typography>
                </button>
              </li>
            </ul>
            <ul
              data-title={`${cap(staticData?.footer.contact_us)}`}
              className={styles.footerOption}
            >
              <li>
                <Mail />
                <Typography variant="body">{company?.email}</Typography>
              </li>
              <li>
                <Phone />
                <Typography variant="body">{company?.phone}</Typography>
              </li>
            </ul>
            <div className={styles.footerIcons}>
              <Link to={company?.facebook || "#"} target="_blank">
                <Facebook />
              </Link>
              <Link to={company?.instagram || "#"} target="_blank">
                <Instagram />
              </Link>
              <Link to={whatsappUrl} target="_blank">
                <WhatsApp />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <a
            href="https://www.instagram.com/geeks_pro/?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA%3D%3D"
            className={styles.footerBottomLink}
            target="_blank"
          >
            Made by GeeksPro
            <Geeks />
          </a>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: FC<{ to: string; label: string }> = ({ to, label }) => (
  <li>
    <Link to={to}>
      <Typography variant="body" capitalize className={styles.footerTypography}>
        {label}
      </Typography>
    </Link>
  </li>
);
