import { Form } from '@/features'
import { Typography } from '@/shared/ui'
import styles from './FormCallBack.module.scss'

export const FormCallBack = () => {
	return (
		<div className={styles.FormCallBack}>
			<div className={styles.FormCallBackContainer}>
				<Typography variant='H2' weight='bold' color='white'>
					Contact us
				</Typography>
				<Form
					title='Do you have any questions?'
					subTitle='Leave your contacts and we will get in touch'
				/>
			</div>
		</div>
	)
}
