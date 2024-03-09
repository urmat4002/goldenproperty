import { ScrollTopButton } from "./ui/ScrollTopButton";
import { WhatsAppButton } from "./ui/WhatsAppButton";
import styles from "./FloatingButtons.module.scss";

export const FloatingButtons = () => {
  return (
    <nav className={styles.FloatingButtons}>
      <WhatsAppButton styles={styles} />
      <ScrollTopButton styles={styles} />
    </nav>
  );
};
