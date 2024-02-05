<<<<<<< HEAD
import { FormCallBack, Property } from '@/widgets'
import {ObjectCard} from "@entities/ObjectCard";
import {HeroHome} from "@widgets/Hero/HeroHome";
=======
import { Select } from "@/features/Select";
import { Benefits } from "@/widgets/Benefits";
import { FormCallBack, Property } from "@/widgets";
import { SliderCity } from "@/features/Slider/SliderCity";
>>>>>>> e9a7e97941fe9aff6879728b21eb1187fa0038e9

export const Home = () => {
  return (
    <div>
<<<<<<< HEAD
        <HeroHome/>
        <ObjectCard/>
=======
      <Select />
>>>>>>> e9a7e97941fe9aff6879728b21eb1187fa0038e9
      <Property />
      <SliderCity />
      <Benefits />
      <FormCallBack />
    </div>
  );
};
