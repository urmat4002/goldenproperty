import { LanguageSelector, Navbar, Search } from "@/features";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Button, Logo } from "@/shared/ui";
import { MenuDropdown } from "..";
import { MenuIcon } from "lucide-react";

export const Header = () => {

  return (
    <>
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div className={styles.headerNavbar}>
          <Navbar />
        </div>
        <div className={styles.headerActions}>
          <Search />
          <LanguageSelector />
          <Button type="icon" customClasses={styles.headerMenu}>
            <MenuIcon />
          </Button>
        </div>
      </div>
    </header>
    <MenuDropdown />
    </>
  );
};
