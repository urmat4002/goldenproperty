import { ChangeEvent, useState } from 'react';
import form from './form.module.scss';
import { FormData } from './types/form.types';
import Input from '../../shared/input/input';
import { Button } from '../../shared/button/button';
import { useAppDispatch } from '../../app/lib/store/hooks';
import { setClose } from '../../app/lib/features/modal/modal-slice';

export const Form = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className={form.form} onSubmit={handleSubmit}>
      <div className={form.form__inputs}>
        <Input
          placeholder="Your name"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          type="text"
        />
        <Input
          placeholder="Your phone"
          value={formData.phone}
          onChange={handleInputChange}
          name="phone"
          type="text"
        />
      </div>
      <Button
        type="submit"
        types="primary"
        onClick={() => dispatch(setClose())}
      >
        Send
      </Button>
    </form>
  );
};
