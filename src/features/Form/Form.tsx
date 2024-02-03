import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { FC } from 'react';
import { setClose } from '../../app/lib/features/modal/modal-slice';

//import { Button } from '../../shared/ui/button/button';
//import Input from '../../shared/ui/input/input';
import form from './Form.module.scss';

export const Form: FC = ({ title, subTitle }) => {
  return (
    <form className={form.form}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <div className={form.formInputs}>
        <div className={form.formLeft}>
          <input placeholder="Name" />
          <input placeholder="Name" />
        </div>
        <div className={form.formReight}>
          <input placeholder="Name" />
          <input placeholder="Name" />
        </div>
      </div>
      <div className={form.formButton}>
        <Button type="primary" size={450}>
          Send
        </Button>
      </div>
    </form>
  );
};
