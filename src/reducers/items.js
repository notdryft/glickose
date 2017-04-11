import {Map} from 'immutable';

import actions from '../actions';

import {Item} from '../models/Item';

export const items = (state = null, action) => {
  switch (action.type) {
    case actions.Items.Set:
      return Map(action.payload.reduce((acc, name) => {
        acc[name] = new Item({name});
        return acc;
      }, {}));
    case actions.Items.Update:
      return action.payload.reduce((acc, item) => {
        return acc.set(item.get('name'), item);
      }, state);
    default:
      return state;
  }
};
