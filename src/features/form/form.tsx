import { ChangeEvent, useState } from 'react';
import { setClose } from '../../app/lib/features/modal/modal-slice';
import { useAppDispatch } from '../../app/lib/store/hooks';
import { Button } from '../../shared/ui/button/button';
import Input from '../../shared/ui/input/input';
import form from './form.module.scss';
import { FormData } from './types/form.types';

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

  const handleButton = () => {
    dispatch(setClose());
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
      <Button type="primary" onClick={() => handleButton()}>
        Send
      </Button>
    </form>
  );
};
