import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { Typography } from "../Typography";
import { WhatsApp } from "../Icons/WhatsApp";
import Download from "../Icons/Download";
import { GButtonProps } from "./types/GButton.types";
import styles from "./GButton.module.scss";

export const GButton: React.FC<GButtonProps> = (props) => {
  const {
    variant = "general",
    className,
    children,
    disabled,
    fullWidth = false,
    ...rest
  } = props;

  let iconToRender: React.ReactNode;
  switch (variant) {
    case "download":
      iconToRender = <Download />;
      break;
    case "navigate":
      iconToRender = <ArrowRight />;
      break;
    case "whatsapp":
      iconToRender = <WhatsApp size={35} />;
      break;
    default:
      iconToRender = null;
      break;
  }

  return (
    <button
      {...rest}
      aria-label="Button"
      className={clsx(styles.button, className)}
      disabled={disabled}
      data-full-width={fullWidth ?? false}
    >
      <Typography variant="button" capitalize>
        {children}
      </Typography>
      {iconToRender}
    </button>
  );
};
