import actions from '../actions';
import constants from '../constants';

export const items = (state = null, action) => {
  switch (action.type) {
    case actions.Items.Set:
      return action.payload.reduce((acc, item) => {
        acc[item] = constants.DefaultRating;
        return acc;
      }, {});
    default:
      return state;
  }
};
