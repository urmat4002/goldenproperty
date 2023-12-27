import { ReactNode } from 'react';

export interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  types?: 'primary' | 'secondary' | 'icon';
  state?: string;
  content?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}
