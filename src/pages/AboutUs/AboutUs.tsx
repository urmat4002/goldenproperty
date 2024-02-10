import { FC } from "react";
import { Benefits, FormCallBack, HeroAboutUs } from "@/widgets";

export const AboutUs: FC = () => {
  return (
    <>
      <HeroAboutUs />
      <Benefits />
      <FormCallBack />
    </>
  );
};
