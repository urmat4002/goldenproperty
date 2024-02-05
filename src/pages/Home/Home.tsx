import { Select } from "@/features/Select";
import { Benefits } from "@/widgets/Benefits";
import { FormCallBack, Property } from "@/widgets";
import { SliderCity } from "@/features/Slider/SliderCity";

export const Home = () => {
  return (
    <div>
      <Select />
      <Property />
      <SliderCity />
      <Benefits />
      <FormCallBack />
    </div>
  );
};
