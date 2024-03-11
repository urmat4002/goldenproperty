import { Typography } from "@/shared/ui/Typography/Typography";
import styles from "./NotFound.module.scss";
import { useGetStaticData } from "@shared/api/hooks";

export const NotFound = () => {
  const { data } = useGetStaticData();

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
        capitalize
        className={styles.errorTitle}
      >
        {data?.static_data.error.not_found}
      </Typography>
      <br />
      <Typography
        variant="body"
        weight="regular"
        color="white"
        className={styles.errorText}
        capitalize
      >
        {data?.static_data.error.error_description}
      </Typography>
    </div>
  );
};
