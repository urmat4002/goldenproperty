import { FC } from 'react'
import Input from '../shared/ui/Input/Input'
import {Button} from '../shared/ui/Button/Button'

const Home: FC = () => {
	return (
		<div style={{padding: '20px'}}>
			<Button type='secondary'>Button</Button>
			<Input  placeholder='Phone'/>
		</div>
	)
}

export default Home
