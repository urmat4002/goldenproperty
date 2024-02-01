import styles from './Navbar.module.scss';
import { NavbarData } from './data/Navbar.data';
import { Typography } from '@/shared/ui';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
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
