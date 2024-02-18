import styles from "./FloatingButtons.module.scss";
import { ScrollTopButton } from "./ui/ScrollTopButton";
import { WhatsAppButton } from "./ui/WhatsAppButton";

export const FloatingButtons = () => {
  return (
    <nav className={styles.FloatingButtons}>
      <WhatsAppButton styles={styles} />
      <ScrollTopButton styles={styles} />
    </nav>
  );
};
