import { useGetStaticData } from "@/shared/api/hooks";
import style from "./Benefits.module.scss";
import { Section } from "@/features";
import { Typography } from "@/shared/ui";
import { Building2, Columns3, ShieldCheck, UserPlus } from "lucide-react";

export const Benefits = () => {
  const { data } = useGetStaticData()
  return (
    <Section title="Benefits of Golden House" container>
      <div className={style.benefits}>
        <div className={style.benefitsItem}>
          <Columns3 />
          <Typography variant="h3">{data?.static_data.body.exclusive_offers}</Typography>
          <Typography variant="body">{data?.static_data.body.exclusive_offers_description}</Typography>
        </div>
        <div className={style.benefitsItem}>
          <ShieldCheck />
          <Typography variant="h3">{data?.static_data.body.confidentiality}</Typography>
          <Typography variant="body">{data?.static_data.body.confidentiality_description}</Typography>
        </div>
        <div className={style.benefitsItem}>
          <Building2 />
          <Typography variant="h3">{data?.static_data.body.wide_selection}</Typography>
          <Typography variant="body">{data?.static_data.body.wide_selection_description}</Typography>
        </div>
        <div className={style.benefitsItem}>
          <UserPlus />
          <Typography variant="h3">{data?.static_data.body.feedback}</Typography>
          <Typography variant="body">{data?.static_data.body.feedback_description}</Typography>
        </div>
      </div>
    </Section>
  );
};
