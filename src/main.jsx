import React from 'react';
import { TweedProvider, Network } from '@paytweed/core-react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TweedProvider
      applicationId={import.meta.env.TWEED_APPLICATION_ID}
      options={{
        chains: [Network.ETHEREUM],
      }}
    >
      <App />
    </TweedProvider>
  </React.StrictMode>
);
