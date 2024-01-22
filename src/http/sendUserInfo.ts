import axios from 'axios';
import { NAME_PHONE_CITY } from './const';

export const sendUserInfo: void = (
  name: string,
  phone: number,
  city: string
) => {
  const data = {
    name,
    phone,
    city,
  };
  axios.post(NAME_PHONE_CITY, data).then((res) => console.log(res.data));
};
