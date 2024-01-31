import { Search } from '../../features/Search/Search'
import Navbar from '../../features/Navbar/Navbar'
import { Logo } from '../../shared/ui/Icons/Logo'
import styles from './Header.module.scss'
import { LangeSelect } from '../../features/LangSelect/LangeSelect'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__logo}>
					<Link to={'/'}>
						<Logo />
					</Link>
				</div>
				<Navbar />
				<div className={styles.header__actions}>
					<Search />
					<LangeSelect />
				</div>
			</div>
		</header>
	)
}

export default Header
