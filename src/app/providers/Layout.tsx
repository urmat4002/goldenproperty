import {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {Footer, Header, Modal} from '../../widgets'
import { FloatingWhatsApp } from '@/features'
import styles from './style/Layout.module.scss'


export const Layout: FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
      <Footer />
      <FloatingWhatsApp />
      <Modal />
    </main>
  )
}
