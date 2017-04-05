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
    case 'UPDATE_ITEM':
      if (state.has(action.payload)) {
        const item = state.get(action.payload);
        return state.set(
          action.payload,
          item.set('rating', item.get('rating') + 1)
        );
      }

      return state;
    default:
      return state;
  }
};
