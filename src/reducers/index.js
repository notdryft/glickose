import {routerReducer as router} from 'react-router-redux';
import {combineReducers} from 'redux';

import {combinations} from './combinations';
import {items} from './items';

export const reducers = combineReducers({
  // app
  combinations,
  items,
  // vendor
  router
});
