import {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {Footer, Header, Modal} from '../../widgets'
import { FloatingWhatsApp } from '@/features'

export const Layout: FC = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
      <FloatingWhatsApp />
      <Modal />
    </main>
  )
}
