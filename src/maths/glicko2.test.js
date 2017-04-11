import * as glicko2 from './glicko2';

test('`μ(r)` should properly convert a rating to Glicko-2\'s scale', () => {
  expect(glicko2.μ(1500)).toBeCloseTo(0, 0);
});

test('`ϕ(RD)` should properly convert a rating deviation to Glicko-2\'s scale', () => {
  expect(glicko2.ϕ(200)).toBeCloseTo(1.1513, 4);
});

test('`g(ϕj)` should properly perform its calculation', () => {
  const Φ = [0.1727, 0.5756, 1.7269];

  const expected = [0.9955, 0.9531, 0.7242];
  for (let j = 0; j < Φ.length; j++) {
    expect(glicko2.g(Φ[j])).toBeCloseTo(expected[j], 3);
  }
});

test('`E(μ, μj, ϕj)` should properly perform its calculation', () => {
  const μ = 0;

  const Μ = [-0.5756, 0.2878, 1.1513];
  const Φ = [0.1727, 0.5756, 1.7269];

  const expected = [0.639, 0.432, 0.303];
  for (let j = 0; j < Φ.length; j++) {
    expect(glicko2.E(μ, Μ[j], Φ[j])).toBeCloseTo(expected[j], 3);
  }
});

test('`v` should properly perform its calculation', () => {
  const μ = 0;

  const Μ = [-0.5756, 0.2878, 1.1513];
  const Φ = [0.1727, 0.5756, 1.7269];

  expect(glicko2.v(μ, Μ, Φ)).toBeCloseTo(1.7785, 3);
});

test('`d` should properly perform its calculation', () => {
  const μ = 0;

  const Μ = [-0.5756, 0.2878, 1.1513];
  const Φ = [0.1727, 0.5756, 1.7269];

  const S = [1, 0, 0];

  expect(glicko2.d(μ, Μ, Φ, S)).toBeCloseTo(-0.4834, 2);
});

test('`step` should properly perform its calculation', () => {
  const μ = 0;
  const ϕ = 1.1513;
  const σ = 0.06;

  const Μ = [-0.5756, 0.2878, 1.1513];
  const Φ = [0.1727, 0.5756, 1.7269];

  const S = [1, 0, 0];

  const a = Math.log(σ ** 2);

  const v = glicko2.v(μ, Μ, Φ);
  const d = glicko2.d(μ, Μ, Φ, S);

  const {A, B, ƒA, ƒB} = glicko2.step(a, d, ϕ, v);

  expect(A).toBeCloseTo(-5.62696, 5);
  expect(B).toBeCloseTo(-5.62696, 5);

  expect(ƒA).toBeCloseTo(0.000000015238, 10);
  expect(ƒB).toBeCloseTo(-0.000000015238, 10);
});

test('`σp` should properly perform its calculation', () => {
  const A = -5.62696;
  expect(glicko2.σp(A)).toBeCloseTo(0.05999, 4);
});

test('`ϕs` should properly perform its calculation', () => {
  const ϕ = 1.1513;
  const σp = 0.05999;

  expect(glicko2.ϕs(ϕ, σp)).toBeCloseTo(1.152862, 6);
});

test('`ϕp` should properly perform its calculation', () => {
  const ϕs = 1.1529;
  const v = 1.7785;

  expect(glicko2.ϕp(ϕs, v)).toBeCloseTo(0.8722, 4);
});

test('`μp` should properly perform its calculation', () => {
  const μ = 0;

  const Μ = [-0.5756, 0.2878, 1.1513];
  const Φ = [0.1727, 0.5756, 1.7269];

  const S = [1, 0, 0];

  const ϕp = 0.8722;

  expect(glicko2.μp(μ, Μ, Φ, ϕp, S)).toBeCloseTo(-0.2069, 4);
});

test('`r(μ)` should properly perform its calculation', () => {
  const μp = -0.2069;

  expect(glicko2.r(μp)).toBeCloseTo(1464.06, 2);
});

test('`RD` should properly perform its calculation', () => {
  const ϕp = 0.8722;

  expect(glicko2.RD(ϕp)).toBeCloseTo(151.52, 2);
});
