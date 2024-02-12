import { Benefits } from "@/widgets/Benefits";
import { FormCallBack, HeroHome, Property } from "@/widgets";
import { SliderCity } from "@/features/Slider/SliderCity";

export const Home = () => {
  return (
    <>
      <HeroHome />
      <Property />
      <SliderCity />
      <Benefits />
      <FormCallBack />
    </>
  );
};
