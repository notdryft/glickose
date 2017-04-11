import actions from './';

export const increment = () => ({
  type: actions.Combination.Increment
});

export const setCombination = index => ({
  type: actions.Combination.Set,
  payload: index
});
