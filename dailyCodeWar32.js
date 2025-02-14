// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };

  
  //psuedo code 
  // we have function with a parameter that is a string, we want to make it so that we have an array of two strings, one with even index capital, the other with odd index capital
  // first we create varaibles to hold the value we want to store eventually into the array
  // we take the parameter and use the .split("") method to seperate each part of the string independently 
  // once the string it split it becomes and array where we can then use the .map() method to transform and output a new array
  // we evaluate with the .map() to check if the index is even or odd by using modulus and a ternary
  // if the ternary evaluates to true for odd we return the element as uppercase and if not we just return the element
  // once we have a t/f response we want to join the split string with the .join() method 
  // once we have evaluated both variables we return that to array to be stored 



  