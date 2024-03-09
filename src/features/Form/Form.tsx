import { FC, ReactNode, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/shared/ui/Button/Button";
import { Select, Typography } from "@/shared/ui";
import { Calendar } from "@/shared/ui/Calendar";
import {
  useGetEstateById,
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
  const { pdfUrl } = useGetEstateById(estateId);

  const { closeModal, showFormMessageSuccess, showFormMessageError } =
    useModalContext();

  const [calendarActive, setCalendarActive] = useState(false);

  const [date, setDate] = useState("");
  const [name, setName] = useState("Elon Musk");
  const [email, setEmail] = useState("aaa@bbb.com");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  //FIX_ME:
  const [phone, setPhone] = useState("+996700111222");
  const [role, setRole] = useState(1);

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
      formData.email = email;
      formData.phone = phone;
      formData.city = city;
      formData.at_date = date;
      formData.estate_id = estateId;
      formData.role = roleApiNames[role];
      break;
  }

  const handleClick = async () => {
    try {
      await axiosAPI.post(`/appeal/${variant}/`, formData);
      if (variant === "download_catalog") {
        localStorage.setItem("catalog", "true");
        setTimeout(() => {
          window.open(pdfUrl, "_blank");
        }, 500);
      }
      showFormMessageSuccess();
    } catch {
      localStorage.removeItem("catalog");
      showFormMessageError();
    }
  };

  return (
    <form className={styles.form}>
      <Typography variant="h3" weight="medium" color="gold" capitalize>
        {formParams.title}
      </Typography>
      <Typography
        className={styles.subtitle}
        variant="body"
        weight="medium"
        color="white"
        capitalize
      >
        {formParams.subTitle}
      </Typography>

      <div className={styles.formGrid}>
        <input
          className={styles.formInput}
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder={capitalize(staticData?.forms.your_name) || "Name"}
        />

        {variant === "download_catalog" ? (
          <input
            className={styles.formInput}
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={
              capitalize(staticData?.forms.your_email) || "Your email"
            }
          />
        ) : (
          <input
            className={styles.formInput}
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder={"Your city"}
          />
        )}

        <input
          className={styles.formInput}
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={
            capitalize(staticData?.forms.phone_number) || "Phone number"
          }
        />

        {variant === "download_catalog" ? (
          <Select
            value={[role]}
            options={roleOptions}
            onChange={(val) => setRole(val[0])}
            placeholder={
              capitalize(staticData?.forms.select_role) || "Select role"
            }
            backgroundColor={false}
          />
        ) : (
          <>
            <input
              className={styles.formInput}
              id="date"
              name="date"
              value={date}
              onFocus={() => setCalendarActive(true)}
              placeholder={capitalize(staticData?.forms.date) || "Date"}
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

      <div className={styles.formButton}>
        <Button onClick={handleClick} type="primary">
          <Typography variant="button">
            {formParams.buttonCaption}
            {formParams.buttonIcon}
          </Typography>
        </Button>
      </div>

      {formParams.closeButton && (
        <Button
          onClick={closeModal}
          customClasses={styles.closeButton}
          type="icon"
        >
          <X color="white" />
        </Button>
      )}

      <input
        className={styles.honeypot}
        type="text"
        id="last_name"
        name="last_name"
        onChange={(e) => setLastName(e.target.value)}
      />
    </form>
  );
};
