import { Typography } from "@/shared/ui/Typography/Typography";
import { useGetStaticData } from "@shared/api/hooks";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  const { data } = useGetStaticData();

  return (
    <div className={styles.error}>
      <a href="/" className={styles.content}>
        <Typography
          variant="body"
          weight="bold"
          color="white"
          className={styles.errorNumber}
        >
          404
        </Typography>
        <Typography
          variant="h1"
          weight="bold"
          color="white"
          capitalize
          className={styles.errorTitle}
        >
          {data?.static_data.error.not_found}
        </Typography>
        <Typography
          variant="body"
          weight="regular"
          color="white"
          className={styles.errorText}
          capitalize
        >
          {data?.static_data.error.error_description}
        </Typography>
      </a>
    </div>
  );
};
