import { FC, useEffect, useState } from "react";
import styles from "./Calendar.module.scss";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { arSA, tr, ru, enGB } from "date-fns/locale";

import clsx from "clsx";

interface CalendarProps {
  calendarActive?: boolean;
  setCalendarActive: () => void;
  // eslint-disable-next-line no-unused-vars
  setDate: (data: string) => void;
}

export const Calendar: FC<CalendarProps> = (props) => {
  const { setCalendarActive, calendarActive, setDate } = props;
  const [language, setLanguage] = useState(enGB);
  const [selected, setSelected] = useState<Date>();

  useEffect(() => {
    const storeLanguage = localStorage.getItem("language");
    //if (storeLanguage === "ru") setLanguage(ru);
    //if (storeLanguage === "tr") setLanguage(tr);
    //if (storeLanguage === "en") setLanguage(enGB);
    //if (storeLanguage === "ar") setLanguage(arSA);

    switch (storeLanguage) {
      case "ru":
        setLanguage(ru);
        break;
      case "tr":
        setLanguage(tr);
        break;
      case "en":
        setLanguage(enGB);
        break;
      case "ar":
        setLanguage(arSA);
        break;
      default:
        setLanguage(enGB);
    }
  }, [setDate, language]);

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
          locale={language}
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />
      </div>
    </div>
  );
};
