import { ChevronDown } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { Typography } from "@/shared/ui";
import { Checkbox } from "../Checkbox";
import { capitalize } from "@/shared/helper/utils";
import style from "./Select.module.scss";

interface SelectItem {
  id: number;
  label?: string;
}

interface SelectProps {
  value: number[];
  options?: SelectItem[];
  placeholder: string | undefined;
  checkbox?: boolean;
  backgroundColor?: boolean;
  onChange: (_value: number[]) => void;
}

export const Select = ({
  backgroundColor = true,
  value,
  options,
  placeholder,
  checkbox,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
      className={clsx(
        style.select,
        backgroundColor
          ? style.backgroundColorFilter
          : style.backgroundColorForm,
        isOpen && style.active
      )}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
    >
      <div className={style.selectContent} onClick={() => setIsOpen(!isOpen)}>
        {/* <div className={style.selectLabel}> */}
        <Typography variant="body" weight="medium" ellipsis>
          {valueOptions.length > 0
            ? valueOptions.map((obj) => capitalize(obj.label)).join(", ")
            : capitalize(placeholder)}
        </Typography>
        {/* </div> */}
        <ChevronDown />
      </div>

      <div className={style.option}>
        <ul className={style.optionList}>
          <li
            className={clsx(
              style.optionItem,
              style.shape,
              backgroundColor
                ? style.backgroundColorFilter
                : style.backgroundColorForm
            )}
          ></li>
          {options?.map((option) => {
            return (
              <li
                className={clsx(
                  style.optionItem,
                  backgroundColor
                    ? style.backgroundColorFilter
                    : style.backgroundColorForm,
                  valueOptions.some((obj) => obj.id === option.id)
                    ? style.selected
                    : ""
                )}
                key={option.id}
                onClick={() => handleSelectOption(option)}
              >
                {checkbox ? (
                  <Checkbox
                    label={option.label}
                    isChecked={valueOptions.some((obj) => obj.id === option.id)}
                  />
                ) : (
                  <Typography variant="body" truncate={18}>
                    {capitalize(option.label)}
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
