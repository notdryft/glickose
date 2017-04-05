import actions from './';

export const loadItems = () => dispatch => {
  const items = require('../items.json'); // FIXME
  dispatch({
    type: actions.Items.Set,
    payload: items
  });
  dispatch({
    type: actions.Combinations.Set,
    payload: items
  });
};

export const updateItem = name => ({
  type: 'UPDATE_ITEM',
  payload: name
});
