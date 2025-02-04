// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

const distinct = a => [...new Set(a)]


//pseudo code

// set up an arrow function named distinct with a parameter of a
// we are looking to get the return on the array of numbers that are not duplicated. I went with an arrow function since it has implicit return which means less code that will need to be written
// we are using new Set(a) to create an array containing only those unique values from the original array
// we need to make sure that those unique values get put into an array so we use the spread operator ... and enclose it in [] to ensure that the returned output is in an array.