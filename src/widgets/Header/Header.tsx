import { LanguageSelector, Navbar, Search } from "@/features";
import { Link } from "react-router-dom";
import { Button, Logo } from "@/shared/ui";
import { MenuDropdown } from "..";
import { MenuIcon, X } from "lucide-react";
import styles from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import { setClose, setOpen } from "@/shared/slices/MenuCityHover/MenuCityHover";

export const Header = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menuSlice.isOpen);

  const toggleOpen = () => {
    isOpen ? dispatch(setClose()) : dispatch(setOpen());
  };

  return (
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
          <div
            className={`${styles.headerInput} ${isOpen ? styles.active : ""}`}
          >
            <Search />
            <LanguageSelector />
          </div>
          <Button
            type="icon"
            customClasses={styles.headerMenu}
            onClick={() => toggleOpen()}
          >
            {isOpen ? <X /> : <MenuIcon />}
          </Button>
        </div>
      </div>
      {isOpen && <MenuDropdown />}
    </header>
  );
};
