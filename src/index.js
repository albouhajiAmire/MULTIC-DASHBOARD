import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store ,{persist}from './page/redux/store/store'
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persist}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

