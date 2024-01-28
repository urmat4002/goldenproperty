import { FC } from 'react';
import { InputProps } from './types/Input.types';
import style from './input.module.scss';

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <div className={style['input-wrapper']}>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
