// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

const plural= (n)=> n === 1 ? false: true

// pseudo code:
// we know that the parameters for this problem will always be a number that is positive that can have decimal places
// we are trying to get a return with the followg
// plural(5),true
//plural(1),false

//what we are doing is just running a ternary that has explicit return to evaluate via comparrison the parameter if not the value of 1 then it will be a plural output. 
// The optimization of this is that less than as a decimal means that less than a whole one is there, but via the evaluation it would return true. However this solves for this questions parameters
