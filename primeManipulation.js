/*
 * Utility file to operate with prime numbers
 *
 *
*/

var lib ={};

//Checks if the input is a valid number to use
//Input: n
lib.isValid = (n, callback)=>{

  //We parse the input to make sure is a number
  var parsedN = parseInt(n);
  //We check the input does not have neither "." nor "," to rule out floating numbers
  var isNotFloat = n.indexOf('.') == -1 && n.indexOf(',') == -1;

  //If n is valid,a number, not floating and greater than 0 the input is correct
  if(n && parsedN && isNotFloat && parsedN > 0){
    return parsedN;
  }else{
    throw new Error('The input value is not valid. N has to be an integer greater than 0. E.g: 1, 2, 5, 6, 23...')
  }

};

//Gets the n first prime numbers
lib.getPrimesArray = (n) =>{
  var primes = [];

  //Loop over all the numbers until n
  for(var i = 2; primes.length < n; i++){
    var notPrime = false;

    //loop over all the previous numbers before i until the square root of i
    //Explanation: a prime number n can be divided into two factors a and b, meaning "n = a * b"
    //For this to be true, a and b has to be equal or less than the square root of n
    //With this, we now that if n is not prime we will be able to find, at least, one other factor
    //rangin from 2 to the square root of n, if this is not the case then n is prime
    for(var z = 2; z < Math.sqrt(i); z++){
      if(i % z === 0){
        notPrime = true;
        break;
      }
    }
    if(!notPrime){
      primes.push(i);
    }
  }
  return primes;
};
module.exports = lib;
