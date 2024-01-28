import axios from 'axios';

export const sendEmail = async (data) => {
  const res = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    data
  );
  return res.data;
};
