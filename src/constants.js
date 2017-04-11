export default {

  Glicko2: {
    r: 1500, // rating
    RD: 350, // rating deviation
    σ: 0.06, // volatility: degree of expected fluctuation in an item's rating

    scale: 173.7178,
    τ: 0.5, // system constant: constrains the change in volatility over time

    ε: 0.000001
  }
};
