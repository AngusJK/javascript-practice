//const rollDie = require('./rollDice');
//const squareImOn = require('./rollDice');
const readline = require('readline');
const { stdout } = require('process');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let squareImOn = 0;
const rollDie = function(callback) {
  result = Math.floor(Math.random() * 6) + 1;
  squareImOn += result;
  if (squareImOn === 1) {
    squareImOn += 36;
    //console.log(`Roll: ${result}. You've landed on a ladder! Advance to 37.`);
  } else if (squareImOn === 4) {
    squareImOn += 10;
    //console.log(`Roll: ${result}. You've landed on a ladder! advance to 14.`);
  } else if (squareImOn === 8) {
    squareImOn += 22;
    //console.log(`Roll: ${result}. You've landed on a ladder! Advance to 30.`);
  } else if (squareImOn === 21) {
    squareImOn += 21;
    //console.log(`Roll: ${result}. You've landed on ladder! Advance to 42.`)
  //} else {
  //console.log(`You rolled a ${result}; you're now on square ${squareImOn}.`);
  };

  callback(result, squareImOn);
};

rl.question("Welcome to Snakes and Ladders. Would you like to play? (Press y or n, then press enter.)\n", (answer) => {
  if (answer === "n") {
    console.log("Okay bye.");
    rl.close();
  } else if (answer === "y") {
    rollDie(() => { console.log(`Y'all rolled a ${result}. Now y'alls on square ${squareImOn}.`) });
    const keepRollin = function() {
      rl.question("Press r then enter to roll again\n", (answer) => {
      if (answer === "r") {
        rollDie(() => { console.log(`Y'all rolled a ${result}. Now y'alls on square ${squareImOn}.`) });
        keepRollin();
      } else {
        console.log("You didn't press r. Game over.");
        rl.close();
        }
      });
    }
    keepRollin();
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
