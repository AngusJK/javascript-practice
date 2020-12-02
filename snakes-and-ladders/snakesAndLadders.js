const readline = require('readline');
const keepRollin = require('./keepRollin');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Welcome to Snakes and Ladders. Would you like to play? (Press y or n, then press enter.)\n", (answer) => {
  if (answer === "n") {
    console.log("Okay bye.");
    rl.close();
  } else if (answer === "y") {
    let squareImOn = 0;
    const askToRoll = function() {
      rl.question("Press 'r' then 'enter' to roll\n", (answer) => {
        if (answer === "r") {
          let response = keepRollin(squareImOn);
          console.log(response[0]);
          squareImOn = response[1];
          if (squareImOn < 100) {
            askToRoll();
          } else if (squareImOn === 100) {
            rl.close();
          }
        } else {
          console.log("You didn't press r. Game over.");
          rl.close();
        }
      });
    };
    askToRoll();
  } else {
    console.log("That's not a valid answer. No soup for you!");
    rl.close();
  }
});

