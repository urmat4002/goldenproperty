import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import Footer from '../../widget/Footer/Footer'
import Header from '../../widget/Header/Header'
import Modal from '../../widget/Modal/Modal'
import { store } from '../lib/store/store'

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
      <Modal />
    </Provider>
  );
};

export default ReduxProvider;
