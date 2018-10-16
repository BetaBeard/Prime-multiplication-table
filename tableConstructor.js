/*
 * Utility file to construct multiplication tables
 *
 *
*/

var lib = {};

//Calculate and draw the multiplication tables
//Input: array
lib.drawTable = (multArray) =>{
  //Check that the array we are receiving is correct and we can operate with it
  if(!multArray || !(multArray instanceof Array) || !(multArray.length > 0)){
    throw new Error('The input is not valid. Input must be an array and longer than 0');
    return false;
  }
  try{

    //First we draw the first cell of the table, which is empty
    var products = drawPadding(multArray);

    //Draw the first row of the table, which is the prime array
    for (var v = 0; v < multArray.length; v++) {
      products += drawPadding(multArray, multArray[v]);
    }
    products += '\n';

    //We calculate all the products and draw the rest of the table
    for (var v = 0; v < multArray.length; v++) {
      //Add each element of the prime array to the beginning of each new row
      products += drawPadding(multArray, multArray[v]);
      for (var i = 0; i < multArray.length; i++) {
          products += drawPadding(multArray, multArray[i] * multArray[v]);
      }
      products += '\n';
    }

    //Finally, print the table
    console.log(products);
  }catch(e){
    throw new Error('Error while drawing table ', e.message);
    return false;
  }
};

//Calculates the padding for each cell of the table so the cells are always the same size
//Input: array, current element of the array
function drawPadding(array, element){
  var result = '';
  var padding = '';

  //We need to now the length of the biggest number that we can get, to calculate the proper padding
  var biggestProductLength = Math.pow(array[array.length - 1], 2).toString().length

  if(element){
    var elementLength = element.toString().length;
    //We calculate how many blank spaces to add to the padding base on the biggest number possible and the current one
    var blanksToAdd =  biggestProductLength - elementLength;
    result = ' '.repeat(blanksToAdd) + element + '||';
  }else{
    //If there is no element we use the bigggest padding possible
    result = ' '.repeat(biggestProductLength) + '||';
  }
  return result;
}

module.exports = lib;
