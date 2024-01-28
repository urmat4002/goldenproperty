import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/lib/store/store';
import { Routing } from './app/provider/RouterProvider';
import './app/styles/index.scss';
import Footer from './widget/Footer/Footer';
import Header from './widget/Header/Header';
import Modal from './widget/Modal/Modal';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routing />
        <Footer />
        <Modal />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
