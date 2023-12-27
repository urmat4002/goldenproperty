import { ReactNode } from "react"
import { Provider } from "react-redux"
import Header from "../../widget/header/header"
import Footer from "../../widget/footer/footer"
import Modal from "../../widget/modal/modal"
import { store } from "../lib/store/store"

const ReduxProvider = (
  { children } : {children: ReactNode}
) => {
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