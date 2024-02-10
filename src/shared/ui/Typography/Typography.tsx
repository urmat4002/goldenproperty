import clsx from "clsx";
import { FC, ReactNode, createElement } from "react";
import styles from "./Typography.module.scss";
import { ITags, TypographyProps } from "./types/Typography.types";

export const Typography: FC<TypographyProps> = (props) => {
  const {
    variant,
    weight = "regular",
    children,
    className,
    color = "",
    truncate,
  } = props;

  const Tags = {
    large: "h1",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    button: "p",
    body: "p",
  };

  const classNamedGenerated = clsx(
    styles[variant],
    styles[weight],
    styles[color],
    className
  );

  const truncateString = (str: ReactNode, maxNumber: number) => {
    if (typeof str === "string") {
      return str.length <= maxNumber ? str : str.slice(0, maxNumber) + "...";
    }
    return str;
  };

  return createElement(
    Tags[variant as keyof ITags],
    { className: classNamedGenerated },
    !truncate ? children : truncateString(children, truncate)
  );
};
