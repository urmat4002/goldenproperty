import { BenefitsGH } from '@/features/BenefitsGH';
import { FormCallBack, Property } from '@/widgets'

export const Home = () => {
  return (
    <div>
      <Property />
      <BenefitsGH />
      <FormCallBack />
    </div>
  );
};
