import { LangSelect, Navbar, Search } from "@/features";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Logo } from "@/shared/ui";
import { MenuDropdown } from "..";
import { useAppSelector } from "@/shared/hooks/hooks";

export const Header = () => {
  const isOpen = useAppSelector((state) => state.menuSlice.isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <Navbar />
        <div className={styles.headerActions}>
          <Search />
          <LangSelect />
        </div>
      </div>
      {isOpen && <MenuDropdown />}
    </header>
  );
};
