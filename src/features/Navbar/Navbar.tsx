import styles from "./Navbar.module.scss";
import { Typography } from "@/shared/ui";
import { NavLink } from "react-router-dom";
import { FC, useState } from "react";
import { MenuLeft } from "../MenuDropdown/MenuLeft";
import { ChevronDown } from "lucide-react";
import { useGetStaticData } from "@/shared/api/hooks";
import { NavbarProps, isData } from "./types/Navbar.types";
import { useModalContext } from "@/app/providers/useModalContext";

export const Navbar: FC<NavbarProps> = ({ isMobile, isCityhovered }) => {
  const { sellEstate } = useModalContext();
  const [openCity, setOpenCity] = useState(false);
  const [cityId, setCityId] = useState<number>(0);
  const { data } = useGetStaticData();
  const headerData = data?.static_data.header as isData;

  const handleCityClick = (id: number) => {
    setCityId(id);
  };

  const toggleCity = () => {
    setOpenCity(!openCity);
  };

  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li>
          <button
            onClick={isMobile ? () => toggleCity() : undefined}
            className={`${styles.navbarMenuItem} ${isCityhovered} ${openCity ? styles.active : ""}`}
          >
            <Typography
              className={`${styles.navbarMenuSelect}`}
              variant="body"
              capitalize
              weight="medium"
              color="white"
            >
              {headerData?.city}
            </Typography>
            {isMobile ? <ChevronDown /> : null}
          </button>
          {openCity && (
            <MenuLeft
              onClick={handleCityClick}
              id={cityId}
              isMobile={isMobile}
            />
          )}
        </li>
        <li className={styles.navbarMenuItem}>
          <NavLink
            to={"/estates"}
            style={({ isActive }) => {
              return isActive ? { color: "#c6a15b" } : {};
            }}
          >
            <Typography variant="body" capitalize weight="medium" color="white">
              {headerData?.all_real_estates}
            </Typography>
          </NavLink>
        </li>
        <li className={styles.navbarMenuItem}>
          <NavLink
            to={"/about-us"}
            style={({ isActive }) => {
              return isActive ? { color: "#c6a15b" } : {};
            }}
          >
            <Typography variant="body" capitalize weight="medium" color="white">
              {headerData?.about_us}
            </Typography>
          </NavLink>
        </li>
        <li className={styles.navbarMenuItem}>
          <button onClick={sellEstate}>
            <Typography variant="body" capitalize weight="medium" color="white">
              {headerData?.place_ad}
            </Typography>
          </button>
        </li>
      </ul>
    </div>
  );
};
