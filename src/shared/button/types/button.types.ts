import { ReactNode } from 'react';

export interface ButtonProps {
  type?: 'button' | 'reset' | 'submit' | 'link';
  types?: 'primary' | 'secondary' | 'icon';
  state?: string;
  content?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  href: string;
  children?: ReactNode;
}
