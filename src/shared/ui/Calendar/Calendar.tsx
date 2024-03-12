import { FC, useEffect, useState } from "react";
import styles from "./Calendar.module.scss";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

//import { arSA, tr, ru, enGB } from "date-fns/locale";

import clsx from "clsx";

interface CalendarProps {
  calendarActive?: boolean;
  setCalendarActive: () => void;
  // eslint-disable-next-line no-unused-vars
  setDate: (data: string) => void;
}

export const Calendar: FC<CalendarProps> = (props) => {
  const { setCalendarActive, calendarActive, setDate } = props;

  const [selected, setSelected] = useState<Date>();

  useEffect(() => {
    if (selected) {
      setDate(
        `${selected.getFullYear()}-${selected.getMonth() + 1}-${selected.getDate()}`
      );
      setCalendarActive();
    }
    setSelected(undefined);
  }, [selected, setDate, setCalendarActive]);

  return (
    <div
      onClick={setCalendarActive}
      className={clsx(styles.calendar, calendarActive && styles.calendarActive)}
    >
      <div
        className={styles.calendarCustom}
        onClick={(e) => e.stopPropagation()}
      >
        <DayPicker
          // locale={enGB}
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />
      </div>
    </div>
  );
};
