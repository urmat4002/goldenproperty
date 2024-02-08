import {AboutUs, Estates, Home, Room} from '@/pages'
import {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import {Layout} from './Layout'
import {Error} from '../../pages'

const router = [
  {
    path: `/estates`,
    element: <Estates />,
  },
  {
    path: 'estates/:id',
    element: <Room />,
  },
  {
    path: `/about-us`,
    element: <AboutUs />,
  },
]

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {router.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
