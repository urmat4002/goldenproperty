import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@app/styles/index.scss';
import { Provider } from 'react-redux';
import { store } from '@app/lib/store';
import { Footer, Header, Property, Modal } from './widgets';
import { Routing } from '@app/providers/RouterProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routing />
        <Property />
        <Footer />
        <Modal />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
