import {Rating} from '../models/Rating';
import * as glicko2 from './glicko2';

export const compute = (item, items, score) => {
  const μ = glicko2.μ(item.get('rating').get('r'));
  const ϕ = glicko2.ϕ(item.get('rating').get('RD'));
  const σ = item.get('rating').get('σ');

  const Μ = glicko2.μ(items.map(item => item.get('rating').get('r')).toArray());
  const Φ = glicko2.ϕ(items.map(item => item.get('rating').get('RD')).toArray());

  const S = score;

  const v = glicko2.v(μ, Μ, Φ);
  const d = glicko2.d(μ, Μ, Φ, S);

  const a = Math.log(σ ** 2);
  const {A} = glicko2.step(a, d, ϕ, v);

  const σp = glicko2.σp(A);

  const ϕs = glicko2.ϕs(ϕ, σp);
  const ϕp = glicko2.ϕp(ϕs, v);

  const μp = glicko2.μp(μ, Μ, Φ, ϕp, S);

  const rp = glicko2.r(μp);
  const RDp = glicko2.RD(ϕp);

  return item.set('rating', new Rating({
    r: rp,
    RD: RDp,
    σ: σp
  }));
};
