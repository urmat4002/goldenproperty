import { FC } from 'react'
import styles from './LangeSelect.module.scss'
import { ChevronDown, Globe } from 'lucide-react'
import { Typography } from '../../shared/ui/Typography/Typography'

export const LangeSelect: FC = () => {
	return (
		<div className={styles.langSelect}>
			<Globe color='white' width={20} />
			<Typography variant='Caption1' weight='medium' color='white'>
				EN
			</Typography>
			<ChevronDown color='white' width={20} />
		</div>
	)
}
