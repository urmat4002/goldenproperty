import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/style/index.scss';
import { Provider } from 'react-redux';
import { store } from './app/lib/store/store';
import Header from './widget/header/header';
import Footer from './widget/footer/footer';
import Modal from './widget/modal/modal';
import { Routing } from './app/provider/router-provider';
import { BrowserRouter } from 'react-router-dom';

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
