// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

const sumArray = a => a ? a.sort((a,b)=> a-b).slice(1,-1).reduce((a,c)=>a+c ,0) : 0

//psuedo code we are given an array of numbers which we are to sum but leave the loweset and highest element off of that sum. First we want to get the array in ascending order so we know that the lowest element will be in the 0 index and the highest element will be in the higheset index  arr.length -1. Second we remove the first and last element with slice. Third, we want to sum the numbers so we use the reduce method. Fourth, we have set up as a ternary because the question required we return a 0 given a certain response.