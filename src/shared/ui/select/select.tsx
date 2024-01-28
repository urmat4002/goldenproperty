import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Typography } from '../Typography/Typography';
import style from './select.module.scss';

type SelectOption = {
  label: string;
  value: number;
};

type SelectProps = {
  value?: SelectOption;
  options: SelectOption[];
  onChange: (option: SelectOption | undefined) => void;
};

export const Select = ({ value, options, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHighlightedIndex, setIsHighlightedIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    setIsHighlightedIndex(null);
  }, [isOpen]);

  const selectOption = (option: SelectOption) => {
    if (option !== value) onChange(option);
  };

  const isOptionSelected = (option: SelectOption) => {
    return option.value === value?.value;
  };

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={style.select}
    >
      <div className={style.select__text}>{value?.label}</div>
      <div className={`${style.select__chevron} ${isOpen ? style.active : ''}`}>
        <ChevronDown />
      </div>

      <div className={`${style['option-block']} ${isOpen ? style.show : ''}`}>
        <ul className={style['option-block__list']}>
          {options.map((option, index) => {
            return (
              <li
                onClick={() => selectOption(option)}
                key={option.value}
                onMouseEnter={() => setIsHighlightedIndex(index)}
                onMouseLeave={() => setIsHighlightedIndex(null)}
                className={`${style['option-block__item']} ${
                  isOptionSelected(option) ? style.selected : ''
                } ${isHighlightedIndex === index ? style.highlighted : ''}`}
              >
                <Typography variant="caption" weight="regular">
                  {option.label}
                </Typography>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
