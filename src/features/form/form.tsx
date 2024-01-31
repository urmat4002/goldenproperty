import { ChangeEvent, useState } from 'react';
import { setClose } from '../../app/lib/features/modal/ModalSlice';
import { useAppDispatch } from '../../app/lib/store/hooks';
import { Button } from '../../shared/ui/Button/Button';
import Input from '../../shared/ui/Input/Input';
// import { sendEmail } from '../../widget/Modal/data/sendEmail';
import form from './Form.module.scss';
import { FormData } from './types/Form.types';

export const Form = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    city: '',
    time: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleButton = async () => {
    dispatch(setClose());
    // const res = await sendEmail(formData);
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
        <Input
          placeholder="City"
          value={formData.city}
          onChange={handleInputChange}
          name="city"
          type="text"
        />
        <Input
          placeholder="When to contact you"
          value={formData.time}
          onChange={handleInputChange}
          name="time"
          type="text"
        />
      </div>
      <Button type="primary" onClick={() => handleButton()}>
        Send
      </Button>
    </form>
  );
};
