import { FC, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { arSA, tr, ru, enGB } from "date-fns/locale";
import { add } from "date-fns";
import clsx from "clsx";
import "react-day-picker/dist/style.css";
import styles from "./Calendar.module.scss";

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
    const currentDate = new Date();
    if (selected) {
      if (
        selected.getFullYear() < currentDate.getFullYear() ||
        selected.getMonth() < currentDate.getMonth() ||
        selected.getDate() < currentDate.getDate()
      ) {
        setDate("--------");
      } else {
        setDate(selected.toLocaleDateString("en-CA"));
      }
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
          fromDate={new Date()}
          toDate={add(new Date(), { months: 1 })}
        />
      </div>
    </div>
  );
};
