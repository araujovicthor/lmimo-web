import React from 'react';

import { ToastContainer } from 'react-toastify';

import TagManager from 'react-gtm-module';
import Routes from './routes';
import GlobalStyle from './styles/global';

const tagManagerArgs = {
  gtmId: 'GTM-NXDWPDM',
};

TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
