import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import { preload } from './actions/index.js';

const logger = createLogger();

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(logger, thunk),
      // https://github.com/zalmoxisus/redux-devtools-extension
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

// store.dispatch(preload());

export default store;
