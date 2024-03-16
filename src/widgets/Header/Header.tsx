import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import { LanguageSelector, Search } from "@/features";
import { Logo } from "@/shared/ui";
import { Navbar } from "./Navbar/Navbar";
import { useHeaderContext } from "@/app/providers/useHeaderContext";
import { Dropdown } from "./Dropdown/Dropdown";
import styles from "./Header.module.scss";

export const Header = () => {
  const { isDropdownOpen, closeDropdown, isMobile, toggleDropdown } =
    useHeaderContext();

  const handleMouseLeave = () => {
    if (isMobile || !isDropdownOpen) return;
    closeDropdown();
  };

  return (
    <header className={styles.header} onMouseLeave={handleMouseLeave}>
      <div className={styles.headerContainer}>
        <Link to={"/"}>
          <Logo />
        </Link>
        {!isMobile && <Navbar />}
        <section className={styles.searchSection}>
          <Search />
          <LanguageSelector />
          {isMobile && (
            <button className={styles.burgerButton} onClick={toggleDropdown}>
              {isDropdownOpen ? <X /> : <MenuIcon />}
            </button>
          )}
        </section>
      </div>
      <Dropdown styles={styles} />
    </header>
  );
};
