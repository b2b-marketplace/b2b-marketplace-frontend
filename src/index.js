import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { persistor } from './store';
import './index.scss';
import App from './App/App';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<HashRouter>*/}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App/>
        </PersistGate>
      </Provider>
      {/*</HashRouter>*/}
    </BrowserRouter>
  </React.StrictMode>
);
