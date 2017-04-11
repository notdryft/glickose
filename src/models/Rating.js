import {Record} from 'immutable';

import constants from '../constants';

export const Rating = Record({
  r: constants.Glicko2.r,
  RD: constants.Glicko2.RD,
  σ: constants.Glicko2.σ
});
