import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Assortment from '../../pages/Estates';
import Home from '../../pages/Home';
import Room from '../../pages/Room';
import AboutUs from '../../pages/AboutUs';

const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: `/estates/city`,
    element: <Assortment />,
  },
  {
    path: `/estates/all`,
    element: <Assortment />,
  },
  {
    path:  `estate/:id`,
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
