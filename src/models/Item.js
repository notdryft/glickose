import {Record} from 'immutable';

import constants from '../constants';

export const Item = Record({
  name: '',
  rating: constants.DefaultRating
});
