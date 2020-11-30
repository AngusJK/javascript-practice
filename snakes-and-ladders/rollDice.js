
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


/*
let squareImOn = 0;
const rollDie = function(callback) {
  result = Math.floor(Math.random() * 6) + 1;
  squareImOn += result;
  if (squareImOn === 1) {
    squareImOn += 37;
    console.log(`Roll: ${result}. You've landed on a ladder! Advance to 37.`);
  } else if (squareImOn === 4) {
    squareImOn += 10;
    console.log(`Roll: ${result}. You've landed on a ladder! advance to 14.`);
  } else if (squareImOn === 8) {
    squareImOn += 22;
    console.log(`Roll: ${result}. You've landed on a ladder! Advance to 30.`);
  } else if (squareImOn === 21) {
    squareImOn += 21;
    console.log(`Roll: ${result}. You've landed on ladder! Advance to 42.`)
  } else {
  console.log(`You rolled a ${result}; you're now on square ${squareImOn}.`);
  };
};
*/
module.exports = rollDie;
