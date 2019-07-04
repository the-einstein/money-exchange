// PLEASE DON'T change function name
//lets give constant objects to the value of coins that we are going to change
const COIN = [
  {type: 'H', value: 50},
  {type: 'Q', value: 25},
  {type: 'D', value: 10},
  {type: 'N', value: 5},
  {type: 'P', value: 1},
];

module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return {error: 'You are rich, my friend! We don\'t have so much coins for exchange'}
  }
  const result = COIN.reduce(change, {rest: currency});
  delete result.rest;
  return result;//returns changed value using ocjects
};

function change(changed, coin) {//function that change currency to the coins
  const value = Math.floor(changed.rest / coin.value);

  if (value > 0) {
    changed[coin.type] = value;
  }
  changed.rest = changed.rest % coin.value;

  return changed;//returns only changed data
}