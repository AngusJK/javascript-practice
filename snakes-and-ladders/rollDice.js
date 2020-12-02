const rollDice = function() {
  let result = Math.floor(Math.random() * 6) + 1;
  return result;
};

module.exports = rollDice;
