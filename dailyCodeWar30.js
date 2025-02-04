// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

const goals = (...a) => a.reduce((acc, c) => acc + c, 0);

//psuedo code

// what we are doing is is creating an arrow function. The function has three parameters that we are to use(the three leagues messi has played in)
// The most effiecnt way of finding the sum is to use the reduce method, but this is a method that works or array or strings, not function parameters
// to convert the parameters to an array we use the spread operator ... and gave it the parameter of a. so inside of a you now have the ability to use reduce to iterate over the array for as many elements there are and provide its sum. 

