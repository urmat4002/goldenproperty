import { Building2, Columns3, ShieldCheck, UserPlus } from "lucide-react";
import { useGetStaticData } from "@/shared/api/hooks";
import { Section } from "@/features";
import { Typography } from "@/shared/ui";
import style from "./Benefits.module.scss";
import { ReactNode } from "react";

export const Benefits = () => {
  const { data } = useGetStaticData();

  return (
    <Section title="Benefits of Golden House" container>
      <div className={style.benefits}>
        <BenefitsCard
          icon={<Columns3 />}
          title={data?.static_data.body.exclusive_offers}
          description={data?.static_data.body.exclusive_offers_description}
        />
        <BenefitsCard
          icon={<ShieldCheck />}
          title={data?.static_data.body.confidentiality}
          description={data?.static_data.body.confidentiality_description}
        />
        <BenefitsCard
          icon={<Building2 />}
          title={data?.static_data.body.wide_selection}
          description={data?.static_data.body.wide_selection_description}
        />
        <BenefitsCard
          icon={<UserPlus />}
          title={data?.static_data.body.feedback}
          description={data?.static_data.body.feedback_description}
        />
      </div>
    </Section>
  );
};

const BenefitsCard = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string | undefined;
  description: string | undefined;
}) => (
  <div className={style.benefitsItem}>
    {icon}
    <Typography variant="h3" capitalize>
      {title}
    </Typography>
    <Typography variant="body" capitalize>
      {description}
    </Typography>
  </div>
);
