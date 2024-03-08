import { LogoFooter } from "@/shared/ui/Icons/LogoFooter";
import styles from "./Footer.module.scss";
import { Geeks } from "@/shared/ui/Icons/Geeks";
import { Mail, Phone } from "lucide-react";
import { Typography, WhatsApp, Facebook, Instagram } from "@/shared/ui";
import { Link } from "react-router-dom";
import { ModalContext } from "@/app/providers/Context";
import { useContext } from "react";
import { capitalize as cap } from "@/shared/helper/utils";
import {
  useGetCities,
  useGetCompany,
  useGetEstateTypes,
  useGetStaticData,
  useGetStaticHeader,
  useWhatsApp,
} from "@/shared/api/hooks";

export const Footer = () => {
  const { sellEstate } = useContext(ModalContext);
  const { whatsappUrl } = useWhatsApp();
  const { data: cities } = useGetCities();
  const { data: types } = useGetEstateTypes();
  const { data: pages } = useGetStaticHeader();
  const { data: staticData } = useGetStaticData();
  const { data: company } = useGetCompany();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <LogoFooter />
          </div>
          <div className={styles.footerNavigate}>
            <ul
              data-title={`${cap(staticData?.static_data.footer.cities)}`}
              className={styles.footerOption}
            >
              {cities?.cities.map((city) => {
                return (
                  <li key={city.id}>
                    <Link to={`/estates/?city=${city.id}`}>
                      <Typography
                        variant="body"
                        capitalize
                        className={styles.footerTypography}
                      >
                        {city.city_name}
                      </Typography>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul
              data-title={`${cap(staticData?.static_data.footer.estate_types)}`}
              className={styles.footerOption}
            >
              {types?.estate_types.map((type) => {
                return (
                  <li key={type.id}>
                    <Link to={`/estates/?type=${type.id}`}>
                      <Typography
                        variant="body"
                        capitalize
                        className={styles.footerTypography}
                      >
                        {type.type}
                      </Typography>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul
              data-title={`${cap(staticData?.static_data.footer.pages)}`}
              className={styles.footerOption}
            >
              <li>
                <Link to={"/estates"}>
                  <Typography
                    variant="body"
                    capitalize
                    className={styles.footerTypography}
                  >
                    {pages?.header.all_real_estates}
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to={"/about-us"}>
                  <Typography
                    variant="body"
                    capitalize
                    className={styles.footerTypography}
                  >
                    {pages?.header.about_us}
                  </Typography>
                </Link>
              </li>
              <li>
                <button onClick={sellEstate}>
                  <Typography
                    variant="body"
                    capitalize
                    className={styles.footerTypography}
                  >
                    {pages?.header.place_ad}
                  </Typography>
                </button>
              </li>
            </ul>
            <ul
              data-title={`${cap(staticData?.static_data.footer.contact_us)}`}
              className={styles.footerOption}
            >
              <li>
                <Mail />
                <Typography variant="body" className={styles.footerTypography}>
                  {company?.about_company.email}
                </Typography>
              </li>
              <li>
                <Phone />
                <Typography variant="body" className={styles.footerTypography}>
                  {company?.about_company.phone}
                </Typography>
              </li>
            </ul>
            <div className={styles.footerIcons}>
              <Link to={"#"} target="_blank">
                <Facebook />
              </Link>
              <Link to={"#"} target="_blank">
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
