import { FC } from "react";
import { Typography } from "@/shared/ui";
import styles from "./FormMessage.module.scss";
import { useGetStaticData } from "@/shared/api/hooks";
import { GButton } from "@/shared/ui/Button/GButton";

export type FormMessage = {
  title: string;
  subtitle: string;
  handleClose: () => void;
};

export type FromProps = {
  message: FormMessage | null;
};

export const FormMessage: FC<FromProps> = ({
  // title = "The application has been successfully accepted!",
  // subTitle = "Thank you for contacting us! Our specialist will contact you soon.",
  message,
}) => {
  const { staticData } = useGetStaticData();

  if (!message) return null;

  const handleClose = message.handleClose;

  return (
    <div className={styles.backdrop} onMouseDown={handleClose}>
      <div className={styles.message} onMouseDown={(e) => e.stopPropagation()}>
        <Typography variant="h3" weight="medium" color="gold" capitalize>
          {message.title}
        </Typography>
        <Typography
          className={styles.subtitle}
          variant="body"
          weight="medium"
          color="white"
          capitalize
        >
          {message.subtitle}
        </Typography>
        <div className={styles.buttonRow}>
          <GButton onClick={handleClose}>
            {staticData?.forms.close || "Close"}
          </GButton>
        </div>
      </div>
    </div>
  );
};
