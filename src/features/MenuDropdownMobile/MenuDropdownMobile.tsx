// MenuDropdown.tsx
import styles from "./MenuDropdownMobile.module.scss";
import { Navbar } from "..";

export const MenuDropdownMobile = () => {
  return (
    <div className={styles.MenuDropdownMobile}>
      <div className={styles.MenuDropdownMobileContainer}>
        <Navbar isMobile={true} />
      </div>
    </div>
  );
};
