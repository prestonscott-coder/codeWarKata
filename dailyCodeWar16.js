/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/

function descendingOrder(n){
    return Number(Math.abs(n).toString().split('').sort((a,b)=>b-a).join(''))
  }

  //psuedo code 
  //we know that we want to have a non-negative integer as the argument that is being placed into the parameter
  //we also know that we are not putting multiple numbers in an array but one number 
  //we will want to structure it the same way as you would if you were to sort an array 
  // 1. we want the function to always return a number so we set Number() to ensure that whatever is run inside of it will return back as a number
  // 2 we need to make sure that all of the aruguments passed into the function are positive so we use Math.abs(n) to run on the parameter to make sure it is positive
  // we then need to reverse all of the numbers, but sort will only do that on multiple numbers, we use .toString() so we can get access to the .split('') method 
  // 4 once the .split() is run we can then sort the array in largest to smallest order. yes, you can do just .sort() but I want people to read my code and understand why its returning that way. 
  //5 we then use .join('') to put all of the numbers back together into a string. 
  // 6 since we are in Number() the string will be converted back into a number.