import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { Typography } from "@/shared/ui";
import { useGetStaticData } from "@/shared/api/hooks";
import { useModalContext } from "@/app/providers/useModalContext";
import { useHeaderContext } from "@/app/providers/useHeaderContext";
import { CityList } from "../Dropdown/CityList/CityList";
import styles from "./Navbar.module.scss";

export const Navbar: FC = () => {
  const { isMobile } = useHeaderContext();
  const { sellEstate } = useModalContext();
  const { header } = useGetStaticData();

  return (
    <nav>
      <ul className={clsx(styles.navbar, isMobile && styles.mobile)}>
        <CityButton styles={styles} />

        <NavbarLink
          to="/estates"
          label={header?.all_real_estates || "Estates"}
        />

        <NavbarLink to="/about-us" label={header?.about_us || "About us"} />

        <li>
          <button className={styles.sellButton} onClick={sellEstate}>
            <Typography variant="body" capitalize weight="medium" color="white">
              {header?.place_ad || "Sell"}
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

const CityButton: FC<{
  styles: CSSModuleClasses;
}> = ({ styles }) => {
  const { toggleDropdown, openDropdown, isDropdownOpen, isMobile } =
    useHeaderContext();
  const { header } = useGetStaticData();
  const [showCityList, setshowCityList] = useState(false);

  const handleMouseEnter = () => {
    if (isMobile) return;
    openDropdown();
  };

  const handleClick = () => {
    if (isMobile) {
      setshowCityList((prev) => !prev);
      return;
    }
    toggleDropdown();
  };

  const isChevronActive = () => {
    if (isMobile && showCityList) return true;
    if (!isMobile && isDropdownOpen) return true;
    return false;
  };

  return (
    <li>
      <button
        className={styles.cityButton}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <Typography variant="body" capitalize weight="medium">
          {header?.city || "City"}
        </Typography>
        <ChevronDown
          className={clsx(
            styles.chevron,
            isChevronActive() && styles.chevronActive
          )}
        />
      </button>
      {isMobile && showCityList && <CityList />}
    </li>
  );
};
