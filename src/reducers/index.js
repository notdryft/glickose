import {routerReducer as router} from 'react-router-redux';
import {combineReducers} from 'redux';

import {combination} from './combination';
import {combinations} from './combinations';
import {items} from './items';

export const reducers = combineReducers({
  // app
  combination,
  combinations,
  items,
  // vendor
  router
});
