import { Button } from "@/shared/ui/Button/Button";
import { FC, ReactNode, useContext, useState } from "react";
import form from "./Form.module.scss";
import { Input, Select, Typography } from "@/shared/ui";
import { useAppDispatch } from "@/shared/hooks/hooks";
import {
  showFormMessage,
  setOpenModal,
} from "@/shared/slices/Modal/ModalSlice";
import { XCircle } from "lucide-react";
import { Calendar } from "@/shared/ui/Calendar";
import { Context } from "@/app/providers/Context";

interface FromProps {
  title?: string;
  subTitle?: string;
  btnTitle?: string;
  catalog?: boolean;
  inputPlaceholder1?: string;
  icon?: ReactNode;
  closeBtn?: boolean;
}

export const Form: FC<FromProps> = ({
  title,
  subTitle,
  btnTitle = "Send",
  catalog = false,
  inputPlaceholder1 = "Date",
  icon,
  closeBtn,
}) => {
  const { closeModal } = useContext(Context);
  const [calendarActive, setCalendarActive] = useState(false);
  const [date, setDate] = useState("");
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(showFormMessage());
    dispatch(setOpenModal());
  };
  ////////////////////////////////////////
  const [roleValue, setRolValue] = useState([
    {
      id: 1,
      label: "I am an agent",
    },
  ]);
  const role = [
    {
      id: 1,
      label: "I am an agent",
    },
    {
      id: 2,
      label: "I am an potintial Buyer",
    },
    {
      id: 3,
      label: "A potential Buyer I just exploring",
    },
  ];

  return (
    <form className={form.form}>
      {closeBtn && (
        <Button onClick={closeModal} customClasses={form.formBtn} type="icon">
          <XCircle color="white" />
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
          <Input placeholder="Name" />
          <Input placeholder="Phone number" />
        </div>
        <div className={form.formWrapper}>
          <Input placeholder="City" />
          {catalog ? (
            <div className={form.formSelect}>
              <Select
                value={roleValue}
                options={role}
                onChange={(val) => setRolValue(val)}
                placeholder={"Select role"}
              />
            </div>
          ) : (
            <>
              <Input
                onFocus={() => setCalendarActive(true)}
                placeholder={inputPlaceholder1}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <Calendar
                calendarActive={calendarActive}
                setCalendarActive={() => setCalendarActive(false)}
                setDate={setDate}
              />
            </>
          )}
        </div>
      </div>
      <div className={form.formButton}>
        <Button onClick={handleClick} type="primary">
          <Typography variant="button">
            {btnTitle}
            {icon}
          </Typography>
        </Button>
      </div>
    </form>
  );
};
