import { CSSProperties, ReactNode } from 'react';

interface BaseButtonProps {
  disabled?: boolean;
}

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'outlined' | 'contained';
type ButtonIconPosition = 'left' | 'right';
type ButtonType = 'primary' | 'secondary' | 'link' | 'icon';

export interface ButtonConfig
  extends Record<
    ButtonType,
    Partial<BaseButtonProps> & {
      classes: string;
      icon?: ReactNode;
      size?: ButtonSize;
      variant?: ButtonVariant;
    }
  > {}

export interface ButtonProps extends BaseButtonProps {
  type: Exclude<ButtonType, 'link'> | 'link';
  onClick?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
  isLoading?: boolean;
  iconPosition?: ButtonIconPosition;
  customClasses?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  children?: ReactNode;
  href?: string;
  target?: string;
  loadingText?: string;
}
