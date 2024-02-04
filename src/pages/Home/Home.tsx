import { Form, Select } from '@/features';
import { Property } from '@/widgets'

export const Home = () => {
  return (
    <div>
      <Select/>
      <Property />
      <Form
        title={'Do you have any questions?'}
        subTitle={'Leave your contacts and we will get in touch'}
      />
    </div>
  );
};
