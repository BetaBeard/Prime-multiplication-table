/*
 * Test file to get performance times for high inputs (20,000+)
 *
 *
*/

//Dependencies
var assert = require('assert');
var primeManipulation = require('./primeManipulation.js');
var table = require('./tableConstructor.js')

console.time('Total execution time');

console.time('Test 1 execution time');
console.log('\x1b[31m', '\nTest 1: 20,000');
var primesArray = primeManipulation.getPrimesArray(20000);
assert.throws(() => {table.drawTable(undefined)});
console.log('\x1b[0m');
console.timeEnd('Test 1 execution time');

console.time('Test 2 execution time');
console.log('\x1b[32m', '\nTest 2: 50,000');
var primesArray = primeManipulation.getPrimesArray(50000);
assert.throws(() => {table.drawTable(undefined)});
console.log('\x1b[0m');
console.timeEnd('Test 2 execution time');

console.time('Test 3 execution time');
console.log('\x1b[33m', '\nTest 3: 100,000');
var primesArray = primeManipulation.getPrimesArray(100000);
assert.throws(() => {table.drawTable(undefined)});
console.log('\x1b[0m');
console.timeEnd('Test 3 execution time');

console.time('Test 4 execution time');
console.log('\x1b[34m', '\nTest 4: 1,000,000');
var primesArray = primeManipulation.getPrimesArray(1000000);
assert.throws(() => {table.drawTable(undefined)});
console.log('\x1b[0m');
console.timeEnd('Test 4 execution time');

console.log('\x1b[0m');
console.timeEnd('Total execution time');
