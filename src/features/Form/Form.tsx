import { Button } from '@/shared/ui/Button/Button'
import { FC } from 'react'
import form from './Form.module.scss'
import { Input, Typography } from '@/shared/ui'

interface FromProps {
	title: string
	subTitle: string
}

export const Form: FC<FromProps> = ({ title, subTitle }) => {
	return (
		<form className={form.form}>
			<div className={form.formTitle}>
				<Typography variant='Title3' weight='medium' color='gold'>
					{title}
				</Typography>
				<Typography variant='Caption1' weight='medium' color='white'>
					{subTitle}
				</Typography>
			</div>
			<div className={form.formInputs}>
				<div className={form.formWrapper}>
					<Input placeholder='Name' className={form.formInput} />
					<Input placeholder='Phone number' />
				</div>
				<div className={form.formWrapper}>
					<Input placeholder='City' />
					<Input placeholder='Date' />
				</div>
			</div>
			<div className={form.formButton}>
				<Button type='primary'>Send</Button>
			</div>
		</form>
	)
}
