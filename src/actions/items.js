import actions from './';
import {setCombinations} from './combinations';

export const setItems = items => ({
  type: actions.Items.Set,
  payload: items
});

export const loadItems = () => dispatch => {
  const items = require('../items.json'); // FIXME
  dispatch(setCombinations(items));
  dispatch(setItems(items));
};
