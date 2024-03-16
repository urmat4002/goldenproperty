import { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { Typography } from "@/shared/ui";
import { useGetStaticData } from "@/shared/api/hooks";
import { useModalContext } from "@/app/providers/useModalContext";
import { useHeaderContext } from "@/app/providers/useHeaderContext";
import styles from "./Navbar.module.scss";

export const Navbar: FC = () => {
  const { toggleDropdown, openDropdown, isDropdownOpen } = useHeaderContext();
  const { sellEstate } = useModalContext();
  const { staticData } = useGetStaticData();
  const headerData = staticData?.header;

  return (
    <nav>
      <ul className={styles.navbarMenu}>
        <li>
          <button
            className={styles.cityButton}
            onMouseEnter={openDropdown}
            onClick={toggleDropdown}
          >
            <Typography variant="body" capitalize weight="medium">
              {headerData?.city || "City"}
            </Typography>
            <ChevronDown
              className={clsx(
                styles.chevron,
                isDropdownOpen && styles.chevronActive
              )}
            />
          </button>
        </li>

        <NavbarLink
          to="/estates"
          label={headerData?.all_real_estates || "Estates"}
        />

        <NavbarLink to="/about-us" label={headerData?.about_us || "About us"} />

        <li>
          <button className={styles.sellButton} onClick={sellEstate}>
            <Typography variant="body" capitalize weight="medium" color="white">
              {headerData?.place_ad || "Sell"}
            </Typography>
          </button>
        </li>
      </ul>
    </nav>
  );
};

const NavbarLink: FC<{ to: string; label: string }> = ({ to, label }) => (
  <li>
    <NavLink
      to={to}
      style={({ isActive }) => {
        return isActive ? { color: "#c6a15b" } : {};
      }}
    >
      <Typography variant="body" capitalize weight="medium" color="white">
        {label}
      </Typography>
    </NavLink>
  </li>
);
