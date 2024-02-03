import { Form } from '@/features';
import { Button, Input } from '@/shared/ui';

export const Home = () => {
  return (
    <div>
      <Button type="primary">Button</Button>
      <Input placeholder="City" />
      <Form
        title={'Do you have any questions?'}
        subTitle={'Leave your contacts and we will get in touch'}
      />
    </div>
  );
};
