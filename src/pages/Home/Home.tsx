import { Benefits } from "@/widgets/Benefits";
import { FormCallBack, HeroHome, Property } from "@/widgets";
import { SliderCity } from "@/features/Slider/SliderCity";
import {ObjectCard} from "@entities/ObjectCard";

export const Home = () => {
  return (
    <div>
      <ObjectCard/>
      <HeroHome/>
      <Property />
      <SliderCity />
      <Benefits />
      <FormCallBack />
    </div>
  );
};