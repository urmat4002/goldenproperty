import { FC } from "react";
import { Button, Typography } from "@/shared/ui";
import { useModalContext } from "@/app/providers/useModalContext";
import formMessage from "../Form.module.scss";

interface FromProps {
  title?: string;
  subTitle?: string;
}

export const FormMessage: FC<FromProps> = ({
  title = "The application has been successfully accepted!",
  subTitle = "Thank you for contacting us! Our specialist will contact you soon.",
}) => {
  const { closeModal } = useModalContext();

  return (
    <div className={formMessage.form}>
      <Typography variant="h3" weight="medium" color="gold">
        {title}
      </Typography>
      <Typography variant="body" weight="medium" color="white">
        {subTitle}
      </Typography>
      <div className={formMessage.formBtn}>
        <Button onClick={closeModal} type="primary">
          <Typography variant="button">Close</Typography>
        </Button>
      </div>
    </div>
  );
};
