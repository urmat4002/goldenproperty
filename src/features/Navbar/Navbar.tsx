import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import styles from "./Navbar.module.scss";
import { Typography } from "@/shared/ui";
import { NavLink } from "react-router-dom";
import { setClose, setOpen } from "@/shared/slices/MenuCityHover/MenuCityHover";
import { setOpenModal } from "@/shared/slices/Modal/ModalSlice";
import { MenuLeft } from "../MenuDropdown/MenuLeft";
import data from "./data/db.json";
import { useState } from "react";
import { ICity } from "./types/Navbar.types";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menuSlice.isOpen);
  const [cityId, setCityId] = useState<number>(0);
  const [dataCity] = useState<ICity[]>(data);
  const [isCityOpen, setIsCityOpen] = useState(false);

  const handleCityClick = (id: number) => {
    setCityId(id);
  };

  const toggleCity = (value: boolean) => {
    setIsCityOpen(value);
    dispatch(setOpen());
  };

  const toggleOpen = () => {
    isOpen ? dispatch(setClose()) : dispatch(setOpen());
  };

  return (
    <div className={styles.navbar}>
      <button
        onClick={() => toggleOpen()}
        className={`${styles.navbarMenuItem} ${styles.city1}`}
      >
        <Typography
          variant="body"
          weight="medium"
          color="white"
          className={styles.navbarMenuSelect}
        >
          City
        </Typography>
      </button>

      <button
        onClick={() => toggleCity(!isCityOpen)}
        className={`${styles.navbarMenuItem} ${styles.city2} ${isCityOpen ? styles.active : ""}`}
      >
        <Typography
          variant="body"
          weight="medium"
          color="white"
          className={styles.navbarMenuSelect}
        >
          City
          <ChevronDown />
        </Typography>
      </button>

      {isCityOpen ? (
        <MenuLeft onClick={handleCityClick} data={dataCity} id={cityId} />
      ) : null}
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarMenuItem}>
          <button
            onMouseEnter={() => dispatch(setOpen())}
            onMouseLeave={() => dispatch(setClose())}
          >
            <Typography
              variant="body"
              weight="regular"
              color="white"
              className={styles.navbarMenuSelect}
            >
              {data?.header.city}
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
            {data?.header.all_real_estates}
          </NavLink>
        </li>
        <li className={styles.navbarMenuItem}>
          <NavLink
            to={"/about-us"}
            style={({ isActive }) => {
              return isActive ? { color: "#c6a15b" } : {};
            }}
          >
            {data?.header.about_us}
          </NavLink>
        </li>
        <li className={styles.navbarMenuItem}>
          <button
            onClick={() => {
              dispatch(setOpenModal());
            }}
          >
            <Typography variant="body" weight="regular" color="white">
              {data?.header.place_ad}
            </Typography>
          </button>
        </li>
      </ul>
    </div>
  );
};
