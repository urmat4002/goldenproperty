import { ChevronDown } from "lucide-react";
import style from "./Select.module.scss";
import { useState } from "react";
import { Typography } from "@/shared/ui";
import { SelectItem, SelectProps } from "./type/type";

export const Select = ({
  value,
  options,
  placeholder,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handeOption = (option: SelectItem) => {
    if (option.id === value?.id) return;

    onChange(option);
  };

  return (
    <div
      className={`${style.select} ${isOpen ? style.active : ""}`}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
    >
      <div className={style.selectContent}>
        <div className={style.selectLabel}>
          <Typography variant="body" weight="medium" truncate={15}>
            {value ? value.label : placeholder}
          </Typography>
        </div>
        <ChevronDown />
      </div>

      <div className={style.option}>
        <ul className={style.optionList}>
          {options?.map((option, index) => {
            return (
              <li
                className={`
                  ${style.optionItem} 
                  ${highlightedIndex === index ? style.highlighted : ""} 
                  ${option.id === value?.id ? style.selected : ""}
                `}
                key={option.id}
                onMouseEnter={() => setHighlightedIndex(index)}
                onMouseLeave={() => setHighlightedIndex(-1)}
                onClick={() => handeOption(option)}
              >
                <Typography variant="body" truncate={20}>
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
