const rollDie = require('./rollDice');

const snakeSquare = function(x, y, z) {
  return `Oh, rotten luck. You rolled a ${x} and landed on square ${y}, which is a snake. You're going back to square ${z}.`;
}

const ladderSquare = function(x, y, z) {
  return `You rolled a ${x} and landed on square ${y}, which is a ladder! Congratulations! You're moving up to square ${z}!`;
}



const keepRollin = function(input) {
    //if (answer === "r") {
      let squareImOn = input;
      let roll = rollDie();
      squareImOn += roll;
      let responsePhrase  = "";
      if (squareImOn < 100) {
        if (squareImOn === 1) {
          let moveSquares = 36;
          squareImOn += moveSquares;
          responsePhrase = ladderSquare(roll, moveSquares, squareImOn);
        } else if (squareImOn === 4) {
          let moveSquares = 10;
          squareImOn += moveSquares;
          responsePhrase = ladderSquare(roll, moveSquares, squareImOn);
        } else if (squareImOn === 8) {
          let moveSquares = 22;
          squareImOn += moveSquares;
          responsePhrase = ladderSquare(roll, moveSquares, squareImOn);
        } else if (squareImOn === 21) {
          let moveSquares = 21;
          squareImOn += moveSquares;
          responsePhrase = ladderSquare(roll, moveSquares, squareImOn);
        } else if (squareImOn === 28) {
          let moveSquares = 48;
          squareImOn += moveSquares;
          responsePhrase = ladderSquare(roll, moveSquares, squareImOn);
        } else if (squareImOn === 32) {
          let moveSquares = 22;
          squareImOn -= moveSquares;
          responsePhrase = snakeSquare(roll. squareImOn);
        } else if (squareImOn === 36) {
          let moveSquares = 30;
          squareImOn -= moveSquares;
          responsePhrase = snakeSquare(roll. squareImOn);
        } else if (squareImOn === 48) {
          let moveSquares = 22;
          squareImOn -= moveSquares;
          responsePhrase = snakeSquare(roll. squareImOn);
        } else if (squareImOn === 50) {
          let moveSquares = 17;
          squareImOn += moveSquares;
          responsePhrase = ladderSquare(roll, moveSquares, squareImOn);
        } else if (squareImOn === 62) {
          let moveSquares = 44;
          squareImOn -= moveSquares;
          responsePhrase = snakeSquare(roll. squareImOn);
        } else if (squareImOn === 71) {
          let moveSquares = 21;
          squareImOn += moveSquares;
          responsePhrase = ladderSquare(roll, moveSquares, squareImOn);
        } else if (squareImOn === 80) {
          let moveSquares = 19;
          squareImOn += moveSquares;
          responsePhrase = ladderSquare(roll, moveSquares, squareImOn);
        } else if (squareImOn === 95) {
          let moveSquares = 39;
          squareImOn -= moveSquares;
          responsePhrase = snakeSquare(roll. squareImOn);
        } else if (squareImOn === 97) {
          let moveSquares = 19;
          squareImOn -= moveSquares;
          responsePhrase = snakeSquare(roll. squareImOn);
        } else {
          responsePhrase = `You rolled a ${roll}. You're now on square ${squareImOn}.`;
        }
        let updatedInfo = [responsePhrase, squareImOn];
        return updatedInfo;
      }
    //}
  } 

  module.exports = keepRollin;