import { LangSelect, Navbar, Search } from '@/features';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Logo } from '@/shared/ui/Icons';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Link to={'/'}>
            <Logo />
          </Link>
        </div>
        <Navbar />
        <div className={styles.headerActions}>
          <Search />
          <LangSelect />
        </div>
      </div>
    </header>
  );
};
