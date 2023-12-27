import { ChangeEvent } from 'react';

export interface InputProps {
  type?: 'text' | 'number';
  label?: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  isDisabled?: boolean;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
