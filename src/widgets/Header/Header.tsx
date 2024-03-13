import { LanguageSelector, Navbar, Search } from "@/features";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Button, Logo } from "@/shared/ui";
import { MenuDropdown } from "..";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
// import { useMediaQuery } from "react-responsive";
// import { MenuDropdownMobile } from "@/features/MenuDropdownMobile";

export const Header = () => {
  const [isOpenMobileMD, setIsOpenMobileMD] = useState(false);
  // const [isOpenDDMMobile, setIsOpenDDMMobile] = useState(false);
  // const isMobile = useMediaQuery({ query: "(max-width: 1128px)" });
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLogo}>
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div
            className={styles.headerNavbar}
            data-mobile-open={isOpenMobileMD}
          >
            <Navbar
              isMobile={isOpenMobileMD}
              isCityhovered={styles.isCityhovered}
              // setIsOpenDDMMobile={isMobile && setIsOpenDDMMobile}
            />
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
        <MenuDropdown moduleStyle={styles} />
      </header>
    </>
  );
};
