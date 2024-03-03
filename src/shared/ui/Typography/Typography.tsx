import clsx from "clsx";
import { FC, createElement } from "react";
import styles from "./Typography.module.scss";
import { ITags, TypographyProps } from "./types/Typography.types";

export const Typography: FC<TypographyProps> = (props) => {
  const {
    variant,
    weight = "regular",
    children,
    className,
    color = "",
    ellipsis,
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
    ellipsis && styles.ellipsis,
    className
  );

  return createElement(
    Tags[variant as keyof ITags],
    { className: classNamedGenerated },
    children
  );
};
