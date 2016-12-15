import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
