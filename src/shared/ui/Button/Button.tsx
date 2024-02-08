import clsx from "clsx";
import { FC, CSSProperties, ReactNode } from "react";
import styles from "./Button.module.scss";
import {
  ButtonProps,
  ButtonSize,
  ButtonType,
  ButtonVariant,
  ButtonIconPosition,
} from "./types/Button.types";
import { buttonConfigs } from "./config/Button.config";

const renderButtonContent = (
  isLoading?: boolean,
  iconPosition?: ButtonIconPosition,
  icon?: ReactNode,
  loadingText?: string,
  children?: ReactNode
) => (
  <>
    {isLoading && (
      <span className={styles.loader}>{loadingText || "Loading"}</span>
    )}
    {iconPosition === "left" && icon}
    {children}
    {iconPosition === "right" && icon}
  </>
);

const commonProps = (
  type: ButtonType,
  size?: ButtonSize,
  variant?: ButtonVariant,
  isLoading?: boolean,
  iconPosition?: ButtonIconPosition,
  customClasses?: string,
  style?: CSSProperties,
  ariaLabel?: string,
  rest?: Record<string, unknown>
) => ({
  className: clsx(
    styles[buttonConfigs[type]?.classes],
    size && styles[`btn-${size}`],
    variant && styles[`btn-${variant}`],
    isLoading && styles["loading"],
    iconPosition === "right" && styles["icon-right"],
    customClasses
  ),
  style,
  "aria-label": ariaLabel || "Button",
  ...rest,
});

export const Button: FC<ButtonProps> = ({
  type,
  size,
  variant,
  isLoading,
  iconPosition = "left",
  customClasses,
  style,
  ariaLabel,
  children,
  ...props
}) => {
  const { icon, ...rest } = buttonConfigs[type] || {};

  if (type === "link") {
    const { href, target, onClick } = props;

    return (
      <a
        href={href}
        target={target}
        onClick={onClick}
        {...commonProps(
          type,
          size,
          variant,
          isLoading,
          iconPosition,
          customClasses,
          style,
          ariaLabel,
          rest
        )}
      >
        {renderButtonContent(
          isLoading,
          iconPosition,
          icon,
          props.loadingText,
          children
        )}
      </a>
    );
  }

  const { onClick } = props;

  return (
    <button
      type="button"
      disabled={props.disabled || isLoading}
      onClick={onClick}
      {...commonProps(
        type,
        size,
        variant,
        isLoading,
        iconPosition,
        customClasses,
        style,
        ariaLabel,
        rest
      )}
    >
      {renderButtonContent(
        isLoading,
        iconPosition,
        icon,
        props.loadingText,
        children
      )}
    </button>
  );
};
