import { FC } from "react";
import { Section } from "@/features";
import HeroSubsection from "./AboutUsSubsection/AboutUsSubsection";
import { useGetCompany, useGetStaticData } from "@/shared/api/hooks";
import { capitalize } from "@/shared/helper/utils";
import styles from "./HeroAboutUs.module.scss";

export const HeroAboutUs: FC = () => {
  const { data } = useGetCompany();
  const { data: staticData } = useGetStaticData();

  return (
    <Section
      title={capitalize(staticData?.static_data.body.mission_and_history)}
      container
    >
      <div className={styles.HeroAboutUsWrapper}>
        <HeroSubsection
          imageUrl={data?.about_company.first_img}
          title={capitalize(staticData?.static_data.body.mission)}
          content={data?.about_company.mission}
          styles={styles}
        />
        <HeroSubsection
          imageUrl={data?.about_company.second_img}
          title={capitalize(staticData?.static_data.body.history)}
          content={data?.about_company.history}
          styles={styles}
        />
        <HeroSubsection
          imageUrl={data?.about_company.third_img}
          title={capitalize(staticData?.static_data.body.company)}
          content={data?.about_company.company}
          styles={styles}
        />
      </div>
    </Section>
  );
};
