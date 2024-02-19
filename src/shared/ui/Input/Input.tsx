import { FC } from "react";
import { InputProps } from "./types/Input.types";
import style from "./Input.module.scss";

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
    <div className={style.inputWrapper}>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
};
