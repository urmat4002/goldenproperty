import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Assortment from "../../pages/assortment";
import Room from "../../pages/room";

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Home />)
  },
  {
    path: '/assortment',
    element: (<Assortment />)
  },
  {
    path: '/room',
    element: (<Room />)
  },
  
])

export const RouterProviders = () => {
  return <RouterProvider router={router} />
}

