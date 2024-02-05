import { Select } from "@/features/Select";
import { BenefitsGH } from "@/features/BenefitsGH";
import { FormCallBack, Property } from "@/widgets";
import { SliderCity } from "@/features/Slider/SliderCity";

export const Home = () => {
  return (
    <div>
      <Select />
      <Property />
      <SliderCity />
      <BenefitsGH />
      <FormCallBack />
    </div>
  );
};
