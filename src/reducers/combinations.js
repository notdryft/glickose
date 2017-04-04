import actions from '../actions';

const combine = elements => {
  const combinations = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      combinations.push({
        left: elements[i],
        right: elements[j]
      });
    }
  }
  return combinations;
};

// Fisher-Yates shuffle
const shuffle = elements => {
  const copy = elements.slice();
  let counter = copy.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = copy[counter];
    copy[counter] = copy[index];
    copy[index] = temp;
  }
  return copy;
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
