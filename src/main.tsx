import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/style/index.scss';
import { RouterProviders } from './app/provider/router-provider.tsx';
import ReduxProvider from './app/provider/redux-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <RouterProviders />
    </ReduxProvider>
  </React.StrictMode>
);
