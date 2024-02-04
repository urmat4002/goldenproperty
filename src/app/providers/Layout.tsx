import {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {Footer, Header, Modal} from '../../widgets'

export const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Modal />
    </div>
  )
}
