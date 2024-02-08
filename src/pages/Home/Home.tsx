import { Select } from "@/features/Select";
import { Benefits } from "@/widgets/Benefits";
import { FormCallBack, HeroHome, Property } from "@/widgets";
import { SliderCity } from "@/features/Slider/SliderCity";

export const Home = () => {
  return (
    <div>
      <HeroHome />
      <Select />
      <Property />
      <SliderCity />
      <Benefits />
      <FormCallBack />
    </div>
  );
};
