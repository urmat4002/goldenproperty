import { FC } from 'react'
import Input from '../shared/ui/Input/Input'
import {Button} from '../shared/ui/Button/Button'
import { Select } from '../shared/ui/Select/Select'

const Home: FC = () => {

	const val = {
		label: 'Dubai',
		value: 1
	}
	const data = [
		{
			label: 'Dubai',
			value: 1
		},
		{
			label: 'Bishkek',
			value: 2
		},
		{
			label: 'Moscow',
			value: 3
		},
		{
			label: 'Berlin',
			value: 4
		},
		{
			label: 'New Yourk',
			value: 5
		},
	]

	return (
		<div style={{padding: '20px'}}>
			<Button type='secondary'>Button</Button>
			<Input  placeholder='Phone'/>
			<Select value={val} options={data} onChange={() => {}} />
		</div>
	)
}

export default Home
