import clsx from "clsx";
import { Navbar } from "../../Navbar/Navbar";
import styles from "./MobileDropdown.module.scss";

export const MobileDropdown = () => {
  return (
    <div className={clsx(styles.mobileDropdown, "container")}>
      <Navbar />
    </div>
  );
};
