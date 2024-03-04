import { useAppDispatch } from "@/shared/hooks/hooks";
import styles from "./Navbar.module.scss";
import { Typography } from "@/shared/ui";
import { NavLink } from "react-router-dom";
import { setClose, setOpen } from "@/shared/slices/MenuCityHover/MenuCityHover";
import { setOpenModal } from "@/shared/slices/Modal/ModalSlice";
import { useGetStaticHeader } from "@/shared/api/hooks";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  
  const { data } = useGetStaticHeader();
  return (
    <div className={styles.navbar}>
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
              City
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
