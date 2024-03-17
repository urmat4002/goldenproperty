import { FC, ReactNode } from "react";
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
  useWhatsApp,
} from "@/shared/api/hooks";
import { useModalContext } from "@/app/providers/useModalContext";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  const { sellEstate } = useModalContext();
  const { whatsappUrl } = useWhatsApp();
  const { data: cities } = useGetCities();
  const { data: types } = useGetEstateTypes();
  const { staticData } = useGetStaticData();
  const { company } = useGetCompany();

  return (
    <footer className={styles.footer}>
      <div className={"Container"}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <LogoFooter />
          </div>
          <div className={styles.footerColumns}>
            <FooterColumn title={cap(staticData?.footer.cities || "Cities")}>
              {cities?.cities.map((city) => {
                return (
                  <FooterLink
                    key={city.id}
                    to={`/estates/?city=${city.id}`}
                    label={city.city_name}
                  />
                );
              })}
            </FooterColumn>
            <FooterColumn
              title={cap(staticData?.footer.estate_types || "Estates")}
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
            </FooterColumn>
            <FooterColumn title={cap(staticData?.footer.pages || "Pages")}>
              <FooterLink
                to={"/estates"}
                label={staticData?.header.all_real_estates || "Estates"}
              />
              <FooterLink
                to={"/about-us"}
                label={staticData?.header.about_us || "About us"}
              />
              <li>
                <button onClick={sellEstate}>
                  <Typography
                    variant="body"
                    capitalize
                    className={styles.footerTypography}
                  >
                    {staticData?.header.place_ad || "Sell"}
                  </Typography>
                </button>
              </li>
            </FooterColumn>

            <FooterColumn
              title={cap(staticData?.footer.contact_us || "Contact us")}
            >
              <FooterContact icon={<Mail />} label={company?.email || "..."} />
              <FooterContact icon={<Phone />} label={company?.phone || "..."} />
            </FooterColumn>
          </div>

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

const FooterContact: FC<{ label: string; icon: ReactNode }> = ({
  label,
  icon,
}) => (
  <li className={styles.footerContact}>
    {icon}
    <Typography variant="body">{label}</Typography>
  </li>
);

const FooterColumn: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => (
  <div>
    <Typography variant="body" capitalize weight="semibold" ellipsis>
      {title}
    </Typography>
    <ul className={styles.footerList}>{children}</ul>
  </div>
);
