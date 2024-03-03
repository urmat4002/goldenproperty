import { FC } from "react";
import { CheckboxProps } from "./type/Checkbox.types";
import { Typography } from "@shared/ui";
import { Checkbox as CheckboxIcon } from "@shared/ui/Icons";
import styles from "./Checkbox.module.scss";

export const Checkbox: FC<CheckboxProps> = ({ isChecked, label }) => {
  return (
    <div className={styles.checkboxWrapper}>
      <label className={styles.check}>
        <input
          checked={isChecked}
          className={styles.checkInput}
          type="checkbox"
          readOnly
        />
        <CheckboxIcon checked={isChecked} />

        <Typography variant="body" ellipsis>
          {label}
        </Typography>
      </label>
    </div>
  );
};
