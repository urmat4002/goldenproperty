import style from './button.module.scss';
import { FC } from 'react';
import { ButtonProps } from './types/button.types';

export const Button: FC<ButtonProps> = ({
  type,
  types,
  children,
  content,
  onClick,
  href,
}) => {
  const typesButton = style[`button--${types}`];
  if (type == 'link') {
    return (
      <a
        href={href}
        type={type}
        className={`${style.button} ${typesButton}`}
        onClick={onClick}
      >
        {children}
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`${style.button} ${typesButton}`}
      onClick={onClick}
    >
      {children}
      <p>{content}</p>
    </button>
  );
};
