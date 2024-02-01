import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../lib/store'
import { Footer, Header, Modal } from '@/widgets'

const ReduxProvider = ({ children }: { children: ReactNode }) => {
	return (
		<Provider store={store}>
			<Header />
			{children}
			<Footer />
			<Modal />
		</Provider>
	)
}

export default ReduxProvider
