import actions from './';

export const incrementCombination = () => ({
  type: actions.Combination.Increment
});

export const setCombination = index => ({
  type: actions.Combination.Set,
  payload: index
});
