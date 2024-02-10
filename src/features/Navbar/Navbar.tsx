import { useAppDispatch } from "@/shared/hooks/hooks";
import styles from "./Navbar.module.scss";
import { NavbarData } from "./data/Navbar.data";
import { Typography } from "@/shared/ui";
import { NavLink } from "react-router-dom";
import { setClose } from "@/shared/slices/MenuCityHover/MenuCityHover";
import { setOpenModal } from "@/shared/slices/Modal/ModalSlice";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.navbar}>
      <button
        onMouseEnter={() => dispatch(setOpen())}
        onMouseLeave={() => dispatch(setClose())}
        className={styles.navbarMenuItem}
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
      <ul className={styles.navbarMenu}>
        {NavbarData.map((link) => {
          return (
            <li className={styles.navbarMenuItem} key={link.label}>
              <NavLink to={link.path}>
                <Typography variant="body" weight="medium">
                  {link.label}
                </Typography>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          dispatch(setOpenModal());
        }}
        className={styles.navbarMenuItem}
      >
        <Typography variant="body" weight="medium" color="white">
          Place ann add
        </Typography>
      </button>
    </div>
  );
};
