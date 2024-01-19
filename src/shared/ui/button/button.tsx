import { Component } from 'lucide-react'
import styles from './button.module.scss';
import { ButtonConfig, ButtonProps } from './types/button.types';
import { FC } from 'react'

const buttonConfigs:ButtonConfig = {
  primary: { className: 'primary-btn', variant: 'contained' },
  secondary: { className: 'secondary-btn', variant: 'contained' },
  link: { className: 'link-btn'},
  icon: { className: 'icon-btn', icon: <span><Component /></span>},
}

export const Button: FC<ButtonProps> = ({
  type,
  size,
  variant,
  isLoading,
  iconPosition = 'left',
  customClasses,
  style,
  ariaLabel,
  ...props
}) => {
  const { className, icon, ...rest } = buttonConfigs[type]
  const renderButtonContent = () => {
    return (
      <>
        {isLoading && <span className={styles.loader}>Loading</span>}
        {iconPosition === 'left' && icon}
        {props.children}
        {iconPosition === 'right' && icon}
      </>
    )
  }

  const commonProps = {
    className: `
      ${styles.button} 
      ${styles[className]} 
      ${size ? styles[`btn-${size}`] : ''} 
      ${variant ? styles[`btn-${variant}`] : ''}
      ${isLoading ? styles.loading : ''}
      ${iconPosition === 'right' ? styles['icon-right'] : ''} 
      ${customClasses}
    `,
    style,
    'aria-label': ariaLabel,
    ...rest
  };

  if (type === 'link') {
    const { href, target, onClick } = props;

    return (
      <a
        href={href}
        target={target}
        onClick={onClick}
        {...commonProps}
      >
        {renderButtonContent()}
      </a>
    );
  }

  const { onClick } = props;

  return (
    <button
      type='button'
      disabled={props.disabled || isLoading}
      onClick={onClick}
      {...commonProps}
    >
      {renderButtonContent()}
    </button>
  )
} 