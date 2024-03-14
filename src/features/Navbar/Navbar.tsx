import styles from "./Navbar.module.scss";
import { Typography } from "@/shared/ui";
import { NavLink } from "react-router-dom";
import { FC, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useGetStaticData } from "@/shared/api/hooks";
import { NavbarProps, isData } from "./types/Navbar.types";
import { useModalContext } from "@/app/providers/useModalContext";
import { MenuLeft } from "../MenuDropdown/MenuLeft";

export const Navbar: FC<NavbarProps> = ({
  isMobile,
  isCityhovered,
  onClickClose,
}) => {
  const { sellEstate } = useModalContext();
  const [openCity, setOpenCity] = useState(false);
  const { data } = useGetStaticData();
  const headerData = data?.static_data.header as isData;
  const toggleCity = () => {
    setOpenCity(!openCity);
  };

  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li className={`${styles.navbarMenuItem} ${isCityhovered}`}>
          <div>
            <button
              onClick={isMobile ? () => toggleCity() : undefined}
              className={`${styles.navbarMenuItem} ${styles.cityButton}`}
            >
              <Typography variant="body" capitalize weight="medium">
                {headerData?.city}
              </Typography>
              <ChevronDown />
            </button>
          </div>
          <div
            data-mobile-ddm-open={isMobile ? openCity : false}
            className={styles.ddm}
          >
            <MenuLeft isMobile={true} onClickClose={onClickClose} />
          </div>
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
