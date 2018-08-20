import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducers from './reducers';

export const history = process.env.BROWSER
  ? createBrowserHistory()
  : createMemoryHistory();

const middleware = [thunkMiddleware, routerMiddleware(history)];
export const store = createStore(
  connectRouter(history)(rootReducers),
  {},
  compose(applyMiddleware(...middleware))
);
