import { useAppDispatch } from '@/app/lib/hooks/hooks'
import styles from './Navbar.module.scss';
import { NavbarData } from './data/Navbar.data';
import { Typography } from '@/shared/ui';
import { NavLink } from 'react-router-dom';
import { setOpen, setClose } from '@/app/lib/features/MenuCityHover/MenuCityHover'

export const Navbar = () => {
  const dispatch = useAppDispatch()
  return (
    <div className={styles.navbar}>
      <button 
        onMouseEnter={() => dispatch(setOpen())}
        onMouseLeave={() => dispatch(setClose())}
        className={styles.navbarMenuItem}>
        <Typography 
          variant="Caption2" 
          weight="medium" 
          color="white"
          className={styles.navbarMenuSelect}
        >
          City
        </Typography>
      </button>
      <ul className={styles.navbarMenu}>
        {NavbarData.map((link) => {
          return (
            <li className={styles.navbarMenuItem} key={link.label}>
              <NavLink to={link.path}>
                <Typography variant="Caption2" weight="medium">
                  {link.label}
                </Typography>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <button onClick={() => {}} className={styles.navbarMenuItem}>
        <Typography variant="Caption2" weight="medium" color="white">
          Place ann add
        </Typography>
      </button>
    </div>
  );
};
