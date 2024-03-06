// MenuDropdown.tsx
import styles from "./MenuDropdownMobile.module.scss";
import { Navbar } from "..";

export const MenuDropdownMobile = () => {
  return (
    <div className={styles.menuDropdown}>
      <div className={styles.menuDropdownContainer}>
        <Navbar isMobile={true} />
      </div>
    </div>
  );
};
