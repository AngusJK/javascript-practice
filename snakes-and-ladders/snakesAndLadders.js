const rollDie = require('./rollDice');
const squareImOn = require('./rollDice');
const readline = require('readline');
const { stdout } = require('process');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Welcome to Snakes and Ladders. Would you like to play? (Press y or n, then press enter.)\n", (answer) => {
  if (answer === "n") {
    console.log("Okay bye.");
    rl.close();
  } else if (answer === "y") {
    rollDie();
    //console.log(squareImOn);
    rl.question("Press r then enter to roll again\n", (answer) => {
      if (answer === "r") {
        rollDie();
        rl.question("Press r then enter to roll again\n", (answer) => {
          rollDie();
          rl.close();
        })
      } else {
        console.log("You didn't press r. Game over.");
        rl.close();
      }
    });
  } else {
    console.log("That's not a valid answer. No soup for you!");
    rl.close();
  }
});
/*
rollDie();
console.log(squareImOn);
*/
// node snakesAndLadders.js
