import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducers from './reducers';
import preloadedState from './preloadedState';

export const history = process.env.BROWSER
  ? createBrowserHistory()
  : createMemoryHistory();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleware = [thunkMiddleware, routerMiddleware(history)];
export const store = createStore(
  connectRouter(history)(rootReducers),
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware))
);
