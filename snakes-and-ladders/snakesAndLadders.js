const rollDie = require('./rollDice');
const readline = require('readline');
// const { stdout } = require('process');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const successfulRoll = function(roll, square) {
  console.log(`Y'all rolled a ${roll}. Now y'alls on square ${square}.`);
}

const tooHigh = function(roll) {
  console.log(`You rolled a ${roll}. You win!`);
}

rl.question("Welcome to Snakes and Ladders. Would you like to play? (Press y or n, then press enter.)\n", (answer) => {
  if (answer === "n") {
    console.log("Okay bye.");
    rl.close();
  } else if (answer === "y") {
    rollDie(successfulRoll, tooHigh);
    const keepRollin = function() {
      rl.question("Press r then enter to roll again\n", (answer) => {
        if (answer === "r") {
          rollDie(successfulRoll, tooHigh);
          keepRollin();
        } else {
          console.log("You didn't press r. Game over.");
          rl.close();
        }
      });
    };
    keepRollin();
  } else {
    console.log("That's not a valid answer. No soup for you!");
    rl.close();
  }
});

// node snakesAndLadders.js
