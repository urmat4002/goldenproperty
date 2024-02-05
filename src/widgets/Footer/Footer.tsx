import { LogoFooter } from '@/shared/ui/Icons/LogoFooter'
import styles from './Footer.module.scss'
import { Geeks } from '@/shared/ui/Icons/Geeks'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { Typography, WhatsApp } from '@/shared/ui'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <LogoFooter />
          </div>
          <div className={styles.footerNavigate}>
            <ul className={styles.footerOption}>
              <li>
                <Typography variant="body" weight="bold">
                  City
                </Typography>
              </li>
              <li>
                <Typography variant="body">Dubai</Typography>
              </li>
              <li>
                <Typography variant="body">Antalya </Typography>
              </li>
              <li>
                <Typography variant="body">Istanbul </Typography>
              </li>
            </ul>
            <ul className={styles.footerOption}>
              <li>
                <Typography variant="body" weight="bold">
                  Type
                </Typography>
              </li>
              <li>
                <Typography variant="body">Villas</Typography>
              </li>
              <li>
                <Typography variant="body">Apartments</Typography>
              </li>
              <li>
                <Typography variant="body">Duplex</Typography>
              </li>
              <li>
                <Typography variant="body">Plots</Typography>
              </li>
              <li>
                <Typography variant="body">Stores</Typography>
              </li>
            </ul>
            <ul className={styles.footerOption}>
              <li>
                <Typography variant="body" weight="bold">
                  Page
                </Typography>
              </li>
              <li>
                <Typography variant="body">All real estates</Typography>
              </li>
              <li>
                <Typography variant="body">About us</Typography>
              </li>
              <li>
                <Typography variant="body">Place an ad</Typography>
              </li>
            </ul>
            <ul className={styles.footerOption}>
              <li>
                <Typography variant="body" weight="bold">
                  Contact us
                </Typography>
              </li>
              <li>
                <Mail strokeWidth={1} size={24} />
                <Typography variant="body">info@Gulsdem.com</Typography>
              </li>
              <li>
                <Phone strokeWidth={1} size={24} />
                <Typography variant="body">+90(212)67890900</Typography>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSocials}>
          <Facebook strokeWidth={1} size={24} />
          <Instagram strokeWidth={1} size={24} />
          <WhatsApp />
        </div>
        <div className={styles.footerBottom}>
          <a
            href="https://www.instagram.com/geeks_pro/?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA%3D%3D"
            className={styles.footerLink}
          >
            Made by Geeks
            <Geeks />
          </a>
        </div>
      </div>
    </footer>
  )
}
