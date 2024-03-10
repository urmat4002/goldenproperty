import { FC, useState } from "react";
import styles from "./Calendar.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import close from "../Icons/close.png";
import { Button } from "@/shared/ui/Button/Button";
import clsx from "clsx";

interface CalendarProps {
  calendarActive?: boolean;
  setCalendarActive?: () => void;
  // eslint-disable-next-line no-unused-vars
  setDate: (data: string) => void;
}

export const Calendar: FC<CalendarProps> = (props) => {
  const { setCalendarActive, calendarActive, setDate } = props;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate());

  const weekDays = {
    en: ["M", "T", "W", "T", "F", "S", "S"],
    ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  };
  const date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const nextMonth = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    setCurrentDate(new Date(year, month + 1));
  };
  const prevMonth = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    setCurrentDate(new Date(year, month - 1));
  };

  const handleClick = (day: number) => {
    setSelectedDay(day);
    setDate(`${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`);
  };

  const month = [];
  let week = [];
  let weeks = 0;
  let days = 1;

  const endOfMonth = date.getDate();
  const firstWeekDay = currentDate.getDay();
  let firstWeekDayFl = false;

  while (weeks < 5) {
    let limit = 7;
    if (weeks === 4) limit = endOfMonth % 7;
    for (let i = 0; i < limit; i++) {
      if (firstWeekDay === i + 1) firstWeekDayFl = true;
      if (firstWeekDayFl) week.push(days++);
      else week.push(0);
    }
    month.push(week);
    week = [];
    weeks++;
  }

  return (
    <div
      onClick={setCalendarActive}
      className={clsx(styles.calendar, calendarActive && styles.calendarActive)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(styles.calendarCustom)}
      >
        <div className={styles.calendarCustomHeader}>
          <div className={styles.calendarCustomTitle}>
            <div className={styles.calendarCustomChevron}>
              <ChevronLeft onClick={prevMonth} color="white" width={20} />
            </div>
            <div>
              {currentDate.toLocaleString("default", { month: "long" })}
            </div>
            <div className={styles.calendarCustomChevron}>
              <ChevronRight onClick={nextMonth} color="white" width={20} />
            </div>
            <div className={styles.calendarCustomTitleBtn}>
              <Button onClick={setCalendarActive} type="icon">
                <img src={close} />
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.calendarWeek}>
          {weekDays.ru.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className={styles.calendarCustomMonth}>
          {month.map((item, index) => (
            <div key={index} className={styles.calendarCustomWeek}>
              {item.map((item, index) => (
                <div
                  onClick={() => handleClick(item)}
                  className={`${styles.calendarCustomDay} ${
                    selectedDay === item ? styles.calendarCustomDayActive : ""
                  }`}
                  key={index}
                >
                  <div onClick={setCalendarActive}>{item}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
