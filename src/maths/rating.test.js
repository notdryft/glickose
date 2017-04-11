import {List} from 'immutable';

import {Item} from '../models/Item';
import {Rating} from '../models/Rating';
import {compute} from './rating';

test('`compute` should properly perform its calculation', () => {
  const item = Item({name: 'one', rating: Rating({r: 1500, RD: 200, σ: 0.06})});
  const items = List([
    Item({name: 'two', rating: Rating({r: 1400, RD: 30})}),
    Item({name: 'three', rating: Rating({r: 1550, RD: 100})}),
    Item({name: 'four', rating: Rating({r: 1700, RD: 300})})
  ]);
  const score = [1, 0, 0];

  const newItem = compute(item, items, score);
  expect(newItem.get('name')).toBe('one');

  const {r, RD, σ} = newItem.get('rating').toObject();
  expect(r).toBeCloseTo(1464.06, 1);
  expect(RD).toBeCloseTo(151.52, 2);
  expect(σ).toBeCloseTo(0.05999, 4);
});
