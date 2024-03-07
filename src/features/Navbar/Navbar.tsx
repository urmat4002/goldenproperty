import { useAppDispatch } from "@/shared/hooks/hooks";
import styles from "./Navbar.module.scss";
import { Typography } from "@/shared/ui";
import { NavLink } from "react-router-dom";
import { setClose, setOpen } from "@/shared/slices/MenuCityHover/MenuCityHover";
import { FC, useContext, useState } from "react";
import { MenuLeft } from "../MenuDropdown/MenuLeft";
import { ChevronDown } from "lucide-react";
import { ModalContext } from "@/app/providers/Context";
import { useGetStaticData } from "@/shared/api/hooks";
import { NavbarProps, isData } from './types/Navbar.types'

export const Navbar: FC<NavbarProps> = ({isMobile}) => {
  const { sellEstate } = useContext(ModalContext);
  const dispatch = useAppDispatch();
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
      {openCity && (
        <MenuLeft
          onClick={handleCityClick}
          id={cityId}
          isMobile={isMobile}
        />
      )}
      <ul className={styles.navbarMenu}>
        <li>
          <button
            onMouseEnter={isMobile ? undefined : () => dispatch(setOpen())}
            onMouseLeave={isMobile ? undefined : () => dispatch(setClose())}
            onClick={isMobile ? () => toggleCity() : undefined}
            className={`${styles.navbarMenuItem} ${openCity ? styles.active : ""}`}
          >
            <Typography
              variant="body"
              weight="medium"
              color="white"
              className={styles.navbarMenuSelect}
            >
              {headerData?.city}
              {isMobile ? <ChevronDown /> : null}
            </Typography>
          </button>
        </li>
        <li className={styles.navbarMenuItem}>
          <NavLink
            to={"/estates"}
            style={({ isActive }) => {
              return isActive ? { color: "#c6a15b" } : {};
            }}
          >
            {headerData?.all_real_estates}
          </NavLink>
        </li>
        <li className={styles.navbarMenuItem}>
          <NavLink
            to={"/about-us"}
            style={({ isActive }) => {
              return isActive ? { color: "#c6a15b" } : {};
            }}
          >
            {headerData?.about_us}
          </NavLink>
        </li>
        <li className={styles.navbarMenuItem}>
          <button onClick={sellEstate}>
            <Typography variant="body" weight="medium" color="white">
              {headerData?.place_ad}
            </Typography>
          </button>
        </li>
      </ul>
    </div>
  );
};
