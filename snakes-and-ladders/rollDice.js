/*
let squareImOn = 0;
const rollDie = function(rollAgainCallback, gameOverCallback) {
  let result = Math.floor(Math.random() * 6) + 1;
  squareImOn += result;
  if (squareImOn < 40) {
    if (squareImOn === 1) {
      squareImOn += 36;
    } else if (squareImOn === 4) {
      squareImOn += 10;
    } else if (squareImOn === 8) {
      squareImOn += 22;
    } else if (squareImOn === 21) {
      squareImOn += 21;
    }
    rollAgainCallback(result, squareImOn);
  } else {
    gameOverCallback(result);
  }
};
*/

const rollDie = function() {
  let result = Math.floor(Math.random() * 6) + 1;
  return result;
};

module.exports = rollDie;
