const rollDie = require('./rollDice');
const readline = require('readline');
// const { stdout } = require('process');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
const successfulRoll = function(roll, square) {
  console.log(`Y'all rolled a ${roll}. Now y'alls on square ${square}.`);
}

const tooHigh = function(roll) {
  console.log(`You rolled a ${roll}. You win!`);
}
*/

let snakeSquare = function(x, y) {
  console.log(`Oh, rotten luck. You rolled a ${x} and landed on a snake. You're going back to square ${y}.`);
}

let ladderSquare = function(x, y) {
  console.log(`You rolled a ${x} and landed on a ladder! Congratulations! You're moving up to square ${y}!`);
}

rl.question("Welcome to Snakes and Ladders. Would you like to play? (Press y or n, then press enter.)\n", (answer) => {
  let squareImOn = 0;
  if (answer === "n") {
    console.log("Okay bye.");
    rl.close();
  } 
  else if (answer === "y") {
    const keepRollin = function() {
      rl.question("Press 'r' then 'enter' to roll\n", (answer) => {
        if (answer === "r") {
          let roll = rollDie();
          squareImOn += roll;
          if (squareImOn < 100) {
            if (squareImOn === 1) {
              squareImOn += 36;
              ladderSquare(roll, squareImOn);
            } else if (squareImOn === 4) {
              squareImOn += 10;
              ladderSquare(roll, squareImOn);
            } else if (squareImOn === 8) {
              squareImOn += 22;
              ladderSquare(roll, squareImOn);
            } else if (squareImOn === 21) {
              squareImOn += 21;
              ladderSquare(roll, squareImOn);
            } else if (squareImOn === 28) {
              squareImOn += 48;
              ladderSquare(roll, squareImOn);
            } else if (squareImOn === 32) {
              squareImOn -= 22;
              snakeSquare(roll. squareImOn);
            } else if (squareImOn === 36) {
              squareImOn -= 30;
              snakeSquare(roll, squareImOn);
            } else if (squareImOn === 48) {
              squareImOn -= 22;
              snakeSquare(roll, squareImOn);
            } else if (squareImOn === 50) {
              squareImOn += 17;
              ladderSquare(roll, squareImOn);
            } else if (squareImOn === 62) {
              squareImOn -= 44;
              snakeSquare(roll, squareImOn);
            } else if (squareImOn === 71) {
              squareImOn += 21;
              ladderSquare(roll, squareImOn);
            } else if (squareImOn === 80) {
              squareImOn += 19;
              ladderSquare(roll, squareImOn);
            } else if (squareImOn === 95) {
              squareImOn -= 39;
              snakeSquare(roll, squareImOn);
            } else if (squareImOn === 97) {
              squareImOn -= 19;
              snakeSquare(roll, squareImOn);
            } else {
              console.log(`You rolled a ${roll}. You're now on square ${squareImOn}.`);
            }
            keepRollin();
          } else {
            console.log(`You rolled a ${roll}. You win!`);
            rl.close();
          }
        } else {
          console.log("You didn't press r. Game over.");
          rl.close();
        }
      });
    };
    keepRollin();
  } 
  else {
    console.log("That's not a valid answer. No soup for you!");
    rl.close();
  }
});

// node snakesAndLadders.js
