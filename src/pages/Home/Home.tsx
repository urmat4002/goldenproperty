import { FormCallBack, Property } from '@/widgets'
import {ObjectCard} from "@entities/ObjectCard";
import {HeroHome} from "@widgets/Hero/HeroHome";

export const Home = () => {
  return (
    <div>
        <HeroHome/>
        <ObjectCard/>
      <Property />
      <FormCallBack />
    </div>
  );
};
