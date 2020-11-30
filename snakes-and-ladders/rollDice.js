let squareImOn = 0;
const rollDie = function(callback) {
  let result = Math.floor(Math.random() * 6) + 1;
  squareImOn += result;
  if (squareImOn === 1) {
    squareImOn += 36;
  } else if (squareImOn === 4) {
    squareImOn += 10;
  } else if (squareImOn === 8) {
    squareImOn += 22;
  } else if (squareImOn === 21) {
    squareImOn += 21;
  }
  callback(result, squareImOn);
};

module.exports = rollDie;
