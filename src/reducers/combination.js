import actions from '../actions';

export const combination = (state = 0, action) => {
  switch (action.type) {
    case actions.Combination.Increment:
      return state + 1;
    case actions.Combination.Set:
      return action.payload;
    default:
      return state;
  }
};
