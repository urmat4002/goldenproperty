import { ChangeEvent } from 'react';

export interface InputProps {
  type?: 'text' | 'number';
  label?: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  isDisabled?: boolean;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
