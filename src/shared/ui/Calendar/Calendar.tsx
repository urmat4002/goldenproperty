import { FC, useEffect, useState } from "react";
import styles from "./Calendar.module.scss";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

//import { arSA } from "date-fns/locale";

import clsx from "clsx";

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #c6a15b;
    color: #c6a15b;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #c6a15b;
  }
`;

interface CalendarProps {
  calendarActive?: boolean;
  setCalendarActive?: () => void;
  // eslint-disable-next-line no-unused-vars
  setDate: (data: string) => void;
}

export const Calendar: FC<CalendarProps> = (props) => {
  const { setCalendarActive, calendarActive, setDate } = props;

  ////////////////////////////////////////////
  const [selected, setSelected] = useState<Date[]>();

  useEffect(() => {
    if (selected)
      setDate(
        `${selected[0].getDate()}-${selected[0].getMonth()}-${selected[0].getFullYear()}`
      );
    setSelected(undefined);
  }, [selected, setDate]);

  return (
    <div
      onClick={setCalendarActive}
      className={clsx(styles.calendar, calendarActive && styles.calendarActive)}
    >
      <style>{css}</style>
      <div
        className={styles.calendarCustom}
        onClick={(e) => e.stopPropagation()}
      >
        <DayPicker
          //locale={arSA}
          mode="multiple"
          max={1}
          selected={selected}
          onSelect={setSelected}
          modifiersClassNames={{
            selected: "my-selected",
            today: "my-today",
          }}
          modifiersStyles={{
            disabled: { fontSize: "75%" },
          }}
        />
      </div>
    </div>
  );
};
