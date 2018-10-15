/*
 * Main file for the FindMyPast code challenge
 *
 *
*/

//Dependencies
var readline = require('readline');
var primeManipulation = require('./primeManipulation.js');
var table = require('./tableConstructor.js');

//Create an instance of readline.Interface
var rl = readline.createInterface({
  //Read from stdin (console input)
  input: process.stdin,

  //Write to stdout (console output)
  output: process.stdout
});

//Request N to the user. N is the quantity of prime numbers to use
rl.question('Please enter the prime numbers to use ', (value) => {
  console.time("Processing time");
  var n = primeManipulation.isValid(value);
  var primesArray = primeManipulation.getPrimesArray(n);

  table.drawTable(primesArray);

  rl.close();
  console.timeEnd("Processing time");
});
