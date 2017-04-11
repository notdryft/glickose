import {Record} from 'immutable';

import {Rating} from './Rating';

export const Item = Record({
  name: '',
  rating: Rating()
});
