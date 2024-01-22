import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/home';
import Assortment from '../../pages/assortment';
import Room from '../../pages/room';
import { Route, Routes } from 'react-router-dom';

const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/assortment',
    element: <Assortment />,
  },
  {
    path: '/room',
    element: <Room />,
  },
];

export const Routing = () => {
  return (
    <Routes>
      {router.map((item, index) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};
