let squareImOn = 1;
const rollDie = function() {
  result = Math.floor(Math.random() * 6) + 1;
  console.log(`You've rolled a ${result}.`);
  squareImOn += result;
  if (squareImOn === 5) {
    squareImOn -= 3;
    console.log(`Oh crap, you landed on a snake! Back to square ${squareImOn}.`);
  } else {
  console.log(`You're now on square ${squareImOn}.`);
  };
};

rollDie();

// node snakesAndLadders.js
