import clsx from 'clsx';
import { FC, createElement } from 'react';
import styles from './Typography.module.scss';
import { ITags, Tags, TypographyProps } from './types/Typography.types';

export const Typography: FC<TypographyProps> = (props) => {
  const {
    variant,
    weight,
    children,
    className,
    color = '',
  } = props;

  const classNamedGenerated = clsx(
    styles[variant],
    styles[weight],
    styles[color],
    className
  );

  return createElement(
    Tags[variant as keyof ITags],
    { className: classNamedGenerated },
    children
  );
};
