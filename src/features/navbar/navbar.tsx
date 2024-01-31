import styles from './Navbar.module.scss'
import { NavbarData } from './data/Navbar.data'
import { Typography } from '../../shared/ui/Typography/Typography'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<ul className={styles.navbar__menu}>
				{NavbarData.map(link => {
					return (
						<li className={styles.navbar__menu_item}>
							<NavLink 
								to={link.path} 
								key={link.label} 
							>
								<Typography variant='Caption2' weight='medium'>
									{link.label}
								</Typography>
							</NavLink>
						</li>
					)
				})}
			</ul>
			<button 
				onClick={() => {}} 
				className={styles.navbar__menu_item}>
				<Typography variant='Caption2' weight='medium' color='white'>
					Place ann add
				</Typography>
			</button>
		</div>
	)
}

export default Navbar
