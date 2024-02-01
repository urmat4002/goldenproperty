import { AboutUs, Estates, Home, Room } from '@/pages';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: `/estates/city`,
    element: <Estates />,
  },
  {
    path: `estates/:id`,
    element: <Room />,
  },
  {
    path: `/about-us`,
    element: <AboutUs />,
  },
];

export const Routing: FC = () => {
  return (
    <Routes>
      {router.map((item, index) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};
