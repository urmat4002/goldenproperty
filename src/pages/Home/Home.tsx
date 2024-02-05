import { Select } from '@/features'
import { Benefits } from '@/widgets/Benefits'
import { FormCallBack, Property } from '@/widgets'

export const Home = () => {
  return (
    <div>
      <Select/>
      <Property />
      <BenefitsGH />
      <FormCallBack />
    </div>
  );
};
