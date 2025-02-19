// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

// Examples
// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679

const minValue = (a) => +[...new Set(a)].sort((a,b)=>a-b).join('');

//pseudo code 

//we know that we were given a list of numbers that were inside of an array
// we want to find the smallest number by joinning them not adding, and remove any duplicates from the array
// we use explicit conversion with + this converts the array to a number instead of string
// we then use the [...new Set(a)] to remove duplicates from the array and make sure that it gets set back into an array
// we run the sort() to make sure that the numbers are in ascending order as we are looking to get the lowest possible number back
// we then join the individual numbers back using join('') to get the smallest number not added together.