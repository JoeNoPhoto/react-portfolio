import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const ReduxWeatherApp = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
);


export default ReduxWeatherApp;
