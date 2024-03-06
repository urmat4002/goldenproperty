import { Button } from "@/shared/ui/Button/Button";
import { FC, ReactNode, useContext, useState } from "react";
import form from "./Form.module.scss";
import { Input, Select, Typography } from "@/shared/ui";
import { XCircle } from "lucide-react";
import { Calendar } from "@/shared/ui/Calendar";
import { ModalContext } from "@/app/providers/Context";
import axios from "axios";
import { useGetStaticData } from "@/shared/api/hooks";
import { capitalize } from "@/shared/helper/utils";

interface FormProps {
  title?: string;
  subTitle?: string;
  btnTitle?: string;
  catalog?: string;
  icon?: ReactNode;
  closeBtn?: boolean;
  onClick?: () => void;
}

export const Form: FC<FormProps> = ({
  title,
  subTitle,
  btnTitle = "Send",
  catalog = "",
  icon,
  closeBtn,
}) => {
  const { data } = useGetStaticData();
  const { closeModal, showFormMessageSuccess, showFormMessageError } =
    useContext(ModalContext);
  const [calendarActive, setCalendarActive] = useState(false);
  const [date, setDate] = useState("");

  ////////////////////////////////////////

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const [roleValue, setRolValue] = useState([1]);
  console.log(roleValue);
  const roleOptions = [
    {
      id: 1,
      label: data?.static_data.forms.agent,
    },
    {
      id: 2,
      label: data?.static_data.forms.buyer,
    },
    {
      id: 3,
      label: data?.static_data.forms.exploring,
    },
  ];

  // const [isLoading, setIsLoading] = useState(false);

  //const consultation = {
  //name: "string",
  //last_name: "",
  //phone: "+996700555888",
  //city: "Dubai",
  // at_date: "2024-03-05",
  // appeal_type: "consultation",
  //};

  // const buy = {
  // name: "string",
  // last_name: "",
  // phone: "+996700555888",
  // city: "Dubai",
  // at_date: "2024-03-05",
  // appeal_type: "buy",
  // estate_id: "1",
  // };

  // const sell = {
  // name: "string",
  // last_name: "",
  // phone: "+996700555888",
  // city: "Dubai",
  // at_date: "2024-03-05",
  // appeal_type: "sell",
  //};

  // const catalogDownload = {
  // name: "string",
  // phone: "+996700555888",
  // email: "user@example.com",
  // role: "agent",
  // estate_id: "1",
  //};

  const handleClick = async () => {
    // setIsLoading(true);
    let sendData = {};
    if (catalog === "buy") {
      sendData = {
        name,
        last_name: "",
        phone,
        city,
        at_date: "2024-03-07",
        appeal_type: "buy",
        estate_id: "1",
      };
    }

    if (catalog === "consultation") {
      sendData = {
        name,
        last_name: "",
        phone,
        city,
        at_date: "2024-03-07",
        appeal_type: catalog,
      };
    }

    if (catalog === "sell") {
      sendData = {
        name,
        last_name: "",
        phone,
        city,
        at_date: "2024-03-07",
        appeal_type: catalog,
      };
    }

    if (catalog === "download_catalog") {
      sendData = {
        name,
        phone,
        email: "user@example.com",
        role: "agent",
        estate_id: "1",
      };
    }

    try {
      const { data } = await axios.post(
        `http://34.16.179.95/api/v1/appeal/${catalog}/`,
        sendData
      );
      console.log(data);
      showFormMessageSuccess();
    } catch {
      console.log("Error");
      showFormMessageError();
    } finally {
      //  setIsLoading(false);
    }

    // closeModal();
  };

  return (
    <form className={form.form}>
      {closeBtn && (
        <Button onClick={closeModal} customClasses={form.formBtn} type="icon">
          <XCircle color="white" />
        </Button>
      )}
      <div className={form.formTitle}>
        <Typography variant="h3" weight="medium" color="gold" capitalize>
          {title}
        </Typography>
        <Typography variant="body" weight="medium" color="white" capitalize>
          {subTitle}
        </Typography>
      </div>
      <div className={form.formInputs}>
        <div className={form.formWrapper}>
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={capitalize(data?.static_data.forms.your_name)}
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={capitalize(data?.static_data.forms.phone_number)}
          />
        </div>
        <div className={form.formWrapper}>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder={capitalize(data?.static_data.forms.your_city)}
          />
          {catalog === "download_catalog" ? (
            <div className={form.formSelect}>
              <Select
                value={roleValue}
                options={roleOptions}
                onChange={(val) => setRolValue(val)}
                placeholder={"Select role"}
                backgroundColor={false}
              />
            </div>
          ) : (
            <>
              <Input
                onFocus={() => setCalendarActive(true)}
                placeholder={capitalize(data?.static_data.forms.date)}
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
