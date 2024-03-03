import { Typography } from "@/shared/ui/Typography/Typography";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.error}>
      <Typography
        variant="h1"
        weight="bold"
        color="white"
        className={styles.errorTitle}
      >
        404
      </Typography>
      <Typography
        variant="h3"
        weight="bold"
        color="white"
        className={styles.errorTitle}
      >
        Not found
      </Typography>

      <Typography
        variant="body"
        weight="regular"
        color="white"
        className={styles.errorText}
      >
        Sorry, the page was not found, it may have been moved, deleted, or
        temporarily unavailable; check that the address you entered is correct.
      </Typography>
    </div>
  );
};
