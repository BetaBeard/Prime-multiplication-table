/*
 * Test file to check the functions used for the prime table generation
 *
 *
*/

//Dependencies
var assert = require('assert');
var primeManipulation = require('./primeManipulation.js');
var table = require('./tableConstructor.js')

console.time('Test execution time');

console.log('\x1b[31m', 'Prime Manipulation: \n');
console.log('\x1b[36m', 'Function isValid');

console.log('\x1b[33m', 'Throw an error if the input is not an integer greater than 0');
assert.throws(primeManipulation.isValid, Error, 'Input must be an integer');
assert.throws(() => { primeManipulation.isValid(3.1) });
assert.throws(() => { primeManipulation.isValid('a') });
assert.throws(() => { primeManipulation.isValid(true) });
assert.throws(() => { primeManipulation.isValid(undefined) });

console.log('\x1b[33m', 'Positive tests. Works with string and integers.');
assert.ok(primeManipulation.isValid(2));
assert.ok(primeManipulation.isValid('3'));
assert.ok(primeManipulation.isValid(400));
assert.ok(primeManipulation.isValid('20000'));

console.log('\x1b[36m', '\nArray of N prime numbers');

console.log('\x1b[33m', 'Must return N numbers');
assert.equal(primeManipulation.getPrimesArray(12).length, 12);
assert.equal(primeManipulation.getPrimesArray(8).length, 8);

console.log('\x1b[33m', 'Throw an error if the input is not an integer greater than 0');
assert.throws(() => { primeManipulation.getPrimesArray(-1) });
assert.throws(() => { primeManipulation.getPrimesArray('a') });
assert.throws(() => { primeManipulation.getPrimesArray(true) });

console.log('\x1b[31m', '\nTable constructor: \n');

console.log('\x1b[36m', 'Draws a multiplication table given an array');
assert.ok(() => {table.drawTable([1, 2, 3, 4, 5, 900])});

console.log('\x1b[33m', 'Throw an error if the input is not an array and longer than 0');
assert.throws(table.drawTable, Error, 'Input must be an array bigger than 0');
assert.throws(() => {table.drawTable(undefined)});
assert.throws(() => {table.drawTable(0)});
assert.throws(() => {table.drawTable([])});

console.log('\x1b[0m');
console.timeEnd('Test execution time');
