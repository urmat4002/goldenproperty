import { LanguageSelector, Navbar, Search } from "@/features";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Button, Logo } from "@/shared/ui";
import { MenuDropdown } from "..";
import { useAppSelector } from "@/shared/hooks/hooks";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { MenuDropdownMobile } from "@/features/MenuDropdownMobile";

export const Header = () => {
  const [isOpenMobileMD, setIsOpenMobileMD] = useState(false);
  const isOpen = useAppSelector((state) => state.menuSlice.isOpen);

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
            <Navbar isMobile={isOpenMobileMD} />
          </div>
          <div className={styles.headerActions}>
            <div
              className={`${styles.main} ${isOpenMobileMD ? styles.active : ""}`}
            >
              <Search />
              <LanguageSelector />
            </div>

            <Button
              type="icon"
              customClasses={styles.headerMenu}
              onClick={() => setIsOpenMobileMD(!isOpenMobileMD)}
            >
              {isOpenMobileMD ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </div>
        <div className={styles.menuDropdown}>{isOpen && <MenuDropdown />}</div>
        <div className={styles.menuDropdownMobile}>
          {isOpenMobileMD && <MenuDropdownMobile />}
        </div>
      </header>
      <MenuDropdown />
    </>
  );
};
