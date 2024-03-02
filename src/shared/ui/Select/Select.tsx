import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Typography } from "@/shared/ui";
import { Checkbox } from "../Checkbox";
import style from "./Select.module.scss";

interface SelectItem {
  id: number;
  label: string;
}

interface SelectProps {
  value: number[];
  options?: SelectItem[];
  placeholder: string;
  checkbox?: boolean;
  //FIX_ME linter doesn't like value
  onChange: (value: number[]) => void;
}

export const Select = ({
  value,
  options,
  placeholder,
  checkbox,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  //FIX_ME is highlightedIndex just for hover styles?
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const valueOptions: SelectItem[] =
    options?.filter((option) => value.includes(option.id)) || [];

  const handleSelectOption = (option: SelectItem) => {
    const { id } = option;

    if (checkbox) {
      const match = valueOptions.find((obj) => obj.id === id);

      if (match) {
        const filteredValue = valueOptions
          .filter((obj) => obj.id !== id)
          .map((obj) => obj.id);
        return onChange(filteredValue);
      }

      const newValue = [...valueOptions, option].map((obj) => obj.id);
      return onChange(newValue);
    }

    setIsOpen(false);
    return onChange([option.id]);
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
            {valueOptions.length > 0
              ? valueOptions.map((obj) => obj.label).join(", ")
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
                  ${valueOptions.some((obj) => obj.id === option.id) ? style.selected : ""}
                `}
                key={option.id}
                onMouseEnter={() => setHighlightedIndex(index)}
                onMouseLeave={() => setHighlightedIndex(-1)}
                onClick={() => handleSelectOption(option)}
              >
                {checkbox ? (
                  <Checkbox
                    label={option.label}
                    isChecked={valueOptions.some((obj) => obj.id === option.id)}
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
