import { FC } from "react";
import { ChangeEvent } from "react";
import styles from "./Input.module.scss";

export interface InputProps {
  type?: "text" | "number";
  label?: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  isDisabled?: boolean;
  className?: string;
  onChange?: (_e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

export const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  onChange,
  onFocus,
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      id={label}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};
