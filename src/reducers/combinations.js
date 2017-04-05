import {List} from 'immutable';

import actions from '../actions';

import {Combination} from '../models/Combination';

const combine = items => {
  const combinations = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      combinations.push(new Combination({
        blue: items[i],
        red: items[j]
      }));
    }
  }
  return List(combinations);
};

// Fisher-Yates shuffle
const shuffle = items => {
  const copy = items.toArray();
  let counter = copy.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = copy[counter];
    copy[counter] = copy[index];
    copy[index] = temp;
  }
  return List(copy);
};

export const combinations = (state = [], action) => {
  switch (action.type) {
    case actions.Combinations.Set:
      return shuffle(
        combine(action.payload)
      );
    default:
      return state;
  }
};
