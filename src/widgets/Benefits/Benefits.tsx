import style from "./Benefits.module.scss";
import { Section } from "@/features";
import { Typography } from "@/shared/ui";
import { Building2, Columns3, ShieldCheck, UserPlus } from "lucide-react";

const objectBenefits = [
  {
    img: <Columns3 />,
    title: "Exclusive offers",
    body: "Our company offers a wide selection of real estate from exclusive apartments to country houses",
  },
  {
    img: <ShieldCheck />,
    title: "Confidentiality",
    body: "We guarantee the confidentiality of your data and cooperate only with trusted agents and sellers.",
  },
  {
    img: <Building2 />,
    title: "A wide selection",
    body: "Exclusive offers, virtual tours, consultations with experts - everything to make the process of choosing a property convenient and exciting.",
  },
  {
    img: <UserPlus />,
    title: "Feedback",
    body: "If you need help managing your property, we provide rental management services, ensuring your property receives maximum value and care.",
  },
];

export const Benefits = () => {
  return (
    <Section title="Benefits of Golden House" container>
      <div className={style.benefits}>
        {objectBenefits.map((item) => (
          <div className={style.benefitsItem} key={item.title}>
            {item.img}
            <Typography variant="h3">{item.title}</Typography>
            <Typography variant="body">{item.body}</Typography>
          </div>
        ))}
      </div>
    </Section>
  );
};
