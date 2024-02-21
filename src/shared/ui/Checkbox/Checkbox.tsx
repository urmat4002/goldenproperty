import { FC } from "react";
import { CheckboxProps } from "./type/Checkbox.types";
import { Typography } from "@shared/ui";
import { Checkbox as CheckboxIcon } from "@shared/ui/Icons";
import style from "./Checkbox.module.scss";

export const Checkbox: FC<CheckboxProps> = ({ isChecked, label }) => {
  return (
    <div className={style.checkboxWrapper}>
      <label className={style.check}>
        <input
          checked={isChecked}
          className={style.checkInput}
          type="checkbox"
          readOnly
        />
        <CheckboxIcon checked={isChecked} />

        <Typography variant="body" truncate={20}>
          {label}
        </Typography>
      </label>
    </div>
  );
};
