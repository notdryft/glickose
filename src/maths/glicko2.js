import constants from '../constants';

const glicko2 = constants.Glicko2;

const apply = (values, f) => {
  if (Array.isArray(values)) {
    return values.map(value => f(value));
  }
  return f(values);
};

export const μ = r => apply(r, r => (r - 1500) / glicko2.scale);
export const r = μ => apply(μ, μ => glicko2.scale * μ + 1500);

export const ϕ = RD => apply(RD, RD => RD / glicko2.scale);
export const RD = ϕ => apply(ϕ, ϕ => glicko2.scale * ϕ);

export const g = ϕ => 1 / Math.sqrt(1 + (3 * ϕ ** 2) / (Math.PI ** 2));
export const E = (μ, μj, ϕj) => 1 / (1 + Math.exp(-g(ϕj) * (μ - μj)));
export const v = (μ, Μ, Φ) => {
  const vj = (μ, μj, ϕj) => {
    const Eμμjϕj = E(μ, μj, ϕj);
    return g(ϕj) ** 2 * Eμμjϕj * (1 - Eμμjϕj);
  };

  let sum = 0;
  for (let j = 0; j < Μ.length; j++) {
    sum += vj(μ, Μ[j], Φ[j]);
  }

  return 1 / sum;
};

export const d = (μ, Μ, Φ, S) => {
  let sum = 0;
  for (let j = 0; j < Μ.length; j++) {
    sum += g(Φ[j]) * (S[j] - E(μ, Μ[j], Φ[j]));
  }

  return v(μ, Μ, Φ) * sum;
};

export const ƒ = (x, a, d, ϕ, v) => {
  const e = Math.exp(x);

  const l1 = e * (d ** 2 - ϕ ** 2 - v - e);
  const l2 = 2 * (ϕ ** 2 + v + e) ** 2;

  const r1 = x - a;
  const r2 = constants.Glicko2.τ ** 2;

  return l1 / l2 - r1 / r2;
};

export const step = (a, d, ϕ, v) => {
  let A = a, B;
  if (d ** 2 > ϕ ** 2 + v) {
    B = Math.log(d ** 2 - ϕ ** 2 - v);
  } else {
    let k = 1;
    while (ƒ(a - k * glicko2.τ) < 0) {
      k += 1;
    }
    B = a - k * glicko2.τ;
  }

  let ƒA = ƒ(A, a, d, ϕ, v);
  let ƒB = ƒ(B, a, d, ϕ, v);

  while (Math.abs(B - A) > glicko2.ε) {
    const C = A + (A - B) * ƒA / (ƒB - ƒA);
    const ƒC = ƒ(C, a, d, ϕ, v);
    if (ƒC * ƒB < 0) {
      A = B;
      ƒA = ƒB;
    } else {
      ƒA = ƒA / 2;
    }
    B = C;
    ƒB = ƒC;
  }

  return {
    A: A,
    B: B,
    ƒA: ƒA,
    ƒB: ƒB
  };
};

export const σp = A => Math.exp(A / 2);
export const ϕs = (ϕ, σp) => Math.sqrt(ϕ ** 2 + σp ** 2);

export const ϕp = (ϕs, v) => 1 / Math.sqrt(1 / (ϕs ** 2) + 1 / v);
export const μp = (μ, Μ, Φ, ϕp, S) => {
  let sum = 0;
  for (let j = 0; j < Μ.length; j++) {
    sum += g(Φ[j]) * (S[j] - E(μ, Μ[j], Φ[j]));
  }

  return μ + ϕp ** 2 * sum;
};
