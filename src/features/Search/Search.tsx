import { SearchIcon } from 'lucide-react'
import { FC } from 'react'
import styles from './Search.module.scss'

export const Search: FC = () => {
	return (
		<div className={styles.search}>
			<SearchIcon color='#B9BCBE' />
			<input 
				type='text' 
				placeholder='Search'
				className={styles.search__input}
			/>
		</div>
	)
}
