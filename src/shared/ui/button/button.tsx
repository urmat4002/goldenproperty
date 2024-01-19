import style from './button.module.scss';
import { FC } from 'react';
import { ButtonProps } from './types/button.types';
import { Typography } from '../typography/typography'

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
        <Typography variant='label' weight='regular'>{content}</Typography>
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
      <Typography variant='label' weight='regular'>
        {content}
      </Typography>
    </button>
  );
};
