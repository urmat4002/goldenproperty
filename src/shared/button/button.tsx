import style from './button.module.scss';
import { FC } from 'react';
import { ButtonProps } from './types/button.types';

export const Button: FC<ButtonProps> = ({
  type,
  types,
  children,
  content,
  onClick,
}) => {
  const typesButton = style[`button--${types}`];

  return (
    <button
      type={type}
      className={`${style.button} ${typesButton}`}
      onClick={onClick}
    >
      {children}
      {content}
    </button>
  );
};
