import { useAppDispatch } from "@/shared/hooks/hooks";
import styles from "./Navbar.module.scss";
import { NavbarData } from "./data/Navbar.data";
import data from "./data/db.json";
import { Typography } from "@/shared/ui";
import { NavLink } from "react-router-dom";
import { setClose, setOpen } from "@/shared/slices/MenuCityHover/MenuCityHover";
import { useContext, useState } from "react";
import { ICity } from "./types/Navbar.types";
import { MenuLeft } from "../MenuDropdown/MenuLeft";
import { ChevronDown } from "lucide-react";
import { ModalContext } from "@/app/providers/Context";

export const Navbar = ({ isMobile }: { isMobile: boolean }) => {
  const { sellEstate } = useContext(ModalContext);
  const dispatch = useAppDispatch();
  const [openCity, setOpenCity] = useState(false);
  const [cityId, setCityId] = useState<number>(0);
  const [dataCity] = useState<ICity[]>(data);

  const handleCityClick = (id: number) => {
    setCityId(id);
  };

  const toggleCity = () => {
    setOpenCity(!openCity);
  };

  return (
    <div className={styles.navbar}>
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
          City
          {isMobile ? <ChevronDown /> : null}
        </Typography>
      </button>
      {openCity && (
        <MenuLeft
          onClick={handleCityClick}
          data={dataCity}
          id={cityId}
          isMobile={isMobile}
        />
      )}
      <ul className={styles.navbarMenu}>
        {NavbarData.map((link) => {
          return (
            <li className={styles.navbarMenuItem} key={link.label}>
              <NavLink
                to={link.path}
                style={({ isActive }) => {
                  return isActive ? { color: "#c6a15b" } : {};
                }}
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <button onClick={sellEstate} className={styles.navbarMenuItem}>
        <Typography variant="body" weight="medium" color="white">
          Place ann add
        </Typography>
      </button>
    </div>
  );
};
