const rollDice = require('./rollDice');

const snakeSquare = function(x, y, z) {
  return `🐍 Oh, rotten luck. You rolled a ${x} and landed on square ${y}, which is a snake. You're going back to square ${z}.`;
};

const ladderSquare = function(x, y, z) {
  return `🪜 You rolled a ${x} and landed on square ${y}, which is a ladder! Congratulations! You're moving up to square ${z}!`;
};

const keepRollin = function(input) {
  let startingSquare = input;
  let roll = rollDice();
  let landedOn = startingSquare + roll;
  let newSquare = startingSquare + roll;
  let responsePhrase  = "";
  if (landedOn === 1) {
    newSquare = landedOn + 37;
    responsePhrase = ladderSquare(roll, landedOn, newSquare);
  } else if (landedOn === 4) {
    newSquare = landedOn + 10;
    responsePhrase = ladderSquare(roll, landedOn, newSquare);
  } else if (landedOn === 8) {
    newSquare = landedOn + 22;
    responsePhrase = ladderSquare(roll, landedOn, newSquare);
  } else if (landedOn === 21) {
    newSquare = landedOn + 21;
    responsePhrase = ladderSquare(roll, landedOn, newSquare);
  } else if (landedOn === 28) {
    newSquare = landedOn + 48;
    responsePhrase = ladderSquare(roll, landedOn, newSquare);
  } else if (landedOn === 32) {
    newSquare = landedOn - 22;
    responsePhrase = snakeSquare(roll, landedOn, newSquare);
  } else if (landedOn === 36) {
    newSquare = landedOn - 30;
    responsePhrase = snakeSquare(roll, landedOn, newSquare);
  } else if (landedOn === 48) {
    newSquare = landedOn - 22;
    responsePhrase = snakeSquare(roll, landedOn, newSquare);
  } else if (landedOn === 50) {
    newSquare = landedOn + 17;
    responsePhrase = ladderSquare(roll, landedOn, newSquare);
  } else if (landedOn === 62) {
    newSquare = landedOn - 44;
    responsePhrase = snakeSquare(roll, landedOn, newSquare);
  } else if (landedOn === 71) {
    newSquare = landedOn + 21;
    responsePhrase = ladderSquare(roll, landedOn, newSquare);
  } else if (landedOn === 80) {
    newSquare = landedOn + 19;
    responsePhrase = ladderSquare(roll, landedOn, newSquare);
  } else if (landedOn === 95) {
    newSquare = landedOn - 39;
    responsePhrase = snakeSquare(roll, landedOn, newSquare);
  } else if (landedOn === 97) {
    newSquare = landedOn - 19;
    responsePhrase = snakeSquare(roll, landedOn, newSquare);
  } else if (landedOn === 100) {
    responsePhrase = `🎉 You rolled a ${roll} and landed on 100! You win!! 🎉`;
  } else if (landedOn > 100) {
    newSquare = startingSquare;
    responsePhrase = `You rolled a ${roll}. You must land exactly on 100. Try again.`;
  } else {
    responsePhrase = `You rolled a ${roll}. You're now on square ${newSquare}.`;
  }
  let updatedInfo = [responsePhrase, newSquare];
  return updatedInfo;
};

module.exports = keepRollin;