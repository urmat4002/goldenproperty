import { Select } from "@/features";
import { BenefitsGH } from "@/features/BenefitsGH";
import { FormCallBack, Property } from "@/widgets";

export const Home = () => {
  return (
    <div>
      <Select />
      <Property />
      <BenefitsGH />
      <FormCallBack />
    </div>
  );
};
