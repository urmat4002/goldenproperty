import { FC, ReactNode, useState } from "react";
import { XCircle } from "lucide-react";
import { Button } from "@/shared/ui/Button/Button";
import { Input, Select, Typography } from "@/shared/ui";
import { Calendar } from "@/shared/ui/Calendar";
import {
  useGetStaticData,
  useGetStaticFormDownloadCatalog,
} from "@/shared/api/hooks";
import { capitalize } from "@/shared/helper/utils";
import { axiosAPI } from "@/shared/api/axiosApi";
import { SelectItem } from "@/shared/ui/Select/Select";
import { useParams } from "react-router-dom";
import { useModalContext } from "@/app/providers/useModalContext";
import styles from "./Form.module.scss";

type FormProps = {
  variant: "download_catalog" | "buy" | "sell" | "consultation";
};

type FormParams = {
  title: string;
  subTitle: string;
  buttonCaption: string;
  buttonIcon: ReactNode;
  closeButton: boolean;
};

type FormData = {
  name: string;
  last_name: string;
  phone: string;
  email?: string;
  city?: string;
  at_date?: string;
  appeal_type: string;
  estate_id?: string;
  role?: string;
};

export const Form: FC<FormProps> = ({ variant }) => {
  const { id: estateId } = useParams();
  const { staticData } = useGetStaticData();
  const { choices } = useGetStaticFormDownloadCatalog();

  const { closeModal, showFormMessageSuccess, showFormMessageError } =
    useModalContext();

  const [calendarActive, setCalendarActive] = useState(false);

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState([1]);

  const roleApiNames: Record<number, string> = {};
  const roleOptions: SelectItem[] = [];

  for (const key in choices) {
    if (choices != undefined) {
      const id = roleOptions.length + 1;
      roleOptions.push({ id, label: choices[key] });
      roleApiNames[id] = key;
    }
  }

  const formParams: FormParams = {
    title: "",
    subTitle: "",
    buttonCaption: "",
    buttonIcon: null,
    closeButton: false,
  };

  const formData: FormData = {
    name,
    last_name: lastName,
    phone: "",
    appeal_type: variant,
  };

  switch (variant) {
    case "buy":
      formParams.title = staticData?.forms.submit_application || "...";
      formParams.subTitle = staticData?.forms.fill_form || "...";
      formParams.buttonCaption = staticData?.forms.send || "...";
      formData.name = name;
      formData.last_name = lastName;
      formData.phone = phone;
      formData.city = city;
      formData.at_date = date;
      formData.estate_id = estateId;
      break;
    case "sell":
      formParams.title = staticData?.forms.sell_with_us || "...";
      formParams.subTitle = staticData?.forms.fill_form || "...";
      formParams.buttonCaption = staticData?.forms.send || "...";
      formParams.closeButton = true;
      formData.name = name;
      formData.last_name = lastName;
      formData.phone = phone;
      formData.city = city;
      formData.at_date = date;
      break;
    case "consultation":
      formParams.title = staticData?.forms.any_question || "...";
      formParams.subTitle = staticData?.forms.leave_your_contacts || "...";
      formParams.buttonCaption = staticData?.forms.send || "...";
      formData.name = name;
      formData.last_name = lastName;
      formData.phone = phone;
      formData.city = city;
      formData.at_date = date;
      break;
    case "download_catalog":
      formParams.title = staticData?.forms.download_catalog || "...";
      formParams.subTitle = staticData?.forms.catalog_fill_form || "...";
      formParams.buttonCaption = staticData?.forms.download || "...";
      //FIX_ME add suitable icon
      formParams.buttonIcon = null;
      formParams.closeButton = true;
      formData.name = name;
      formData.last_name = lastName;
      formData.phone = phone;
      formData.city = city;
      formData.at_date = date;
      formData.role = roleApiNames[role[0]];
      break;
  }

  const handleClick = async () => {
    try {
      const response = await axiosAPI.post(`/appeal/${variant}/`, formData);
      console.log(response);
      showFormMessageSuccess();
    } catch {
      showFormMessageError();
    } finally {
      //  setIsLoading(false);
    }
  };

  return (
    <form className={styles.form}>
      {formParams.closeButton && (
        <Button onClick={closeModal} customClasses={styles.formBtn} type="icon">
          <XCircle color="white" />
        </Button>
      )}
      <div className={styles.formTitle}>
        <Typography variant="h3" weight="medium" color="gold" capitalize>
          {formParams.title}
        </Typography>
        <Typography variant="body" weight="medium" color="white" capitalize>
          {formParams.subTitle}
        </Typography>
      </div>
      <div className={styles.formInputs}>
        <input
          className={styles.honeypot}
          type="text"
          id="last_name"
          name="last_name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <div className={styles.formWrapper}>
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={capitalize(staticData?.forms.your_name) || "Name"}
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={
              capitalize(staticData?.forms.phone_number) || "Phone number"
            }
          />
        </div>
        <div className={styles.formWrapper}>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder={capitalize(staticData?.forms.your_city) || "Your city"}
          />
          {variant === "download_catalog" ? (
            <div className={styles.formSelect}>
              <Select
                value={role}
                options={roleOptions}
                onChange={(val) => setRole(val)}
                placeholder={"Select role"}
                backgroundColor={false}
              />
            </div>
          ) : (
            <>
              <Input
                onFocus={() => setCalendarActive(true)}
                placeholder={capitalize(staticData?.forms.date) || "Date"}
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
      <div className={styles.formButton}>
        <Button onClick={handleClick} type="primary">
          <Typography variant="button">
            {formParams.buttonCaption}
            {formParams.buttonIcon}
          </Typography>
        </Button>
      </div>
    </form>
  );
};
