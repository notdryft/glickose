import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'react-router-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import {reducers} from './reducers';

export const history = createBrowserHistory();
const router = routerMiddleware(history);

export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(router, thunk)
));
