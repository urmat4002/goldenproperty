import { FC, useState } from "react";
import calendarCustom from "./Calendar.module.scss";
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

  const date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const endOfMonth = date.getDate();

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

  while (weeks < 5) {
    let limit = 7;
    if (weeks === 4) limit = endOfMonth % 7;
    for (let i = 0; i < limit; i++) {
      week.push(days++);
    }
    month.push(week);
    week = [];
    weeks++;
  }

  return (
    <div
      className={clsx(
        calendarCustom.calendarCustom,
        calendarActive ? calendarCustom.calendarCustomActive : ""
      )}
    >
      <div className={calendarCustom.calendarCustomHeader}>
        <div className={calendarCustom.calendarCustomTitle}>
          <div className={calendarCustom.calendarCustomChevron}>
            <ChevronLeft onClick={prevMonth} color="white" width={20} />
          </div>
          <div>{currentDate.toLocaleString("default", { month: "long" })}</div>
          <div className={calendarCustom.calendarCustomChevron}>
            <ChevronRight onClick={nextMonth} color="white" width={20} />
          </div>
          <div className={calendarCustom.calendarCustomTitleBtn}>
            <Button onClick={setCalendarActive} type="icon">
              <img src={close} />
            </Button>
          </div>
        </div>
      </div>
      <div className={calendarCustom.calendarCustomMonth}>
        {month.map((item, index) => (
          <div key={index} className={calendarCustom.calendarCustomWeek}>
            {item.map((item, index) => (
              <div
                onClick={() => handleClick(item)}
                className={`${calendarCustom.calendarCustomDay} ${
                  selectedDay === item
                    ? calendarCustom.calendarCustomDayActive
                    : ""
                }`}
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
