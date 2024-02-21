import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Typography } from "@/shared/ui";
import { SelectItem, SelectProps } from "./type/type";
import { Checkbox } from "../Checkbox";
import style from "./Select.module.scss";

export const Select = ({
  value,
  options,
  placeholder,
  checkbox,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleOption = (option: SelectItem) => {
    const { id } = option;

    if (checkbox) {
      const match = value.find((obj) => obj.id === id);

      if (match) {
        const filteredValue = value.filter((obj) => obj.id !== id);
        return onChange(filteredValue);
      }
      const newValue = [...value, option];
      return onChange(newValue);
    }
    return onChange([option]);
  };

  return (
    <div
      className={`${style.select} ${isOpen ? style.active : ""}`}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
    >
      <div className={style.selectContent} onClick={() => setIsOpen(!isOpen)}>
        <div className={style.selectLabel}>
          <Typography variant="body" weight="medium" truncate={15}>
            {value.length > 0
              ? value.map((obj) => obj.label).join(", ")
              : placeholder}
          </Typography>
        </div>
        <ChevronDown />
      </div>

      <div className={style.option}>
        <ul className={style.optionList}>
          <li className={`${style.optionItem} ${style.shape}`}></li>
          {options?.map((option, index) => {
            return (
              <li
                className={`
                  ${style.optionItem}
                  ${highlightedIndex === index ? style.highlighted : ""}
                  ${value.some((obj) => obj.id === option.id) ? style.selected : ""}
                `}
                key={option.id}
                onMouseEnter={() => setHighlightedIndex(index)}
                onMouseLeave={() => setHighlightedIndex(-1)}
                onClick={() => handleOption(option)}
              >
                {checkbox ? (
                  <Checkbox
                    label={option.label}
                    isChecked={value.some((obj) => obj.id === option.id)}
                  />
                ) : (
                  <Typography variant="body" truncate={18}>
                    {option.label}
                  </Typography>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
