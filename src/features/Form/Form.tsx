import { Button } from "@/shared/ui/Button/Button";
import { FC, ReactNode, useState } from "react";
import form from "./Form.module.scss";
import { Input, Typography } from "@/shared/ui";
import { useAppDispatch } from "@/shared/hooks/hooks";
import { setCloseModal } from "@/shared/slices/Modal/ModalSlice";
import { XCircle } from "lucide-react";
import { Calendar } from "@/shared/ui/Calendar";

interface FromProps {
  title?: string;
  subTitle?: string;
  btnTitle?: string;
  inputPlaceholder1?: string;
  inputPlaceholder2?: string;
  icon?: ReactNode;
  closeBtn?: boolean;
}

export const Form: FC<FromProps> = ({
  title,
  subTitle,
  btnTitle = "Send",
  inputPlaceholder1 = "City",
  inputPlaceholder2 = "Date",
  icon,
  closeBtn,
}) => {
  const [calendarActive, setCalendarActive] = useState(false);
  const [date, setDate] = useState("");
  const dispatch = useAppDispatch();
  console.log(typeof setDate);
  return (
    <form className={form.form}>
      {closeBtn && (
        <Button
          onClick={() => dispatch(setCloseModal())}
          customClasses={form.formBtn}
          type="icon"
        >
          <XCircle />
        </Button>
      )}
      <div className={form.formTitle}>
        <Typography variant="h3" weight="medium" color="gold">
          {title}
        </Typography>
        <Typography variant="body" weight="medium" color="white">
          {subTitle}
        </Typography>
      </div>
      <div className={form.formInputs}>
        <div className={form.formWrapper}>
          <Input placeholder="Name" className={form.formInput} />
          <Input placeholder="Phone number" />
        </div>
        <div className={form.formWrapper}>
          <Input placeholder={inputPlaceholder1} />
          <Input
            onFocus={() => setCalendarActive(true)}
            placeholder={inputPlaceholder2}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Calendar
            calendarActive={calendarActive}
            setCalendarActive={() => setCalendarActive(false)}
            setDate={setDate}
          />
        </div>
      </div>
      <div className={form.formButton}>
        <Button type="primary">
          <Typography variant="button">
            {btnTitle}
            {icon}
          </Typography>
        </Button>
      </div>
    </form>
  );
};
