/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]*/

const digitize = (n)=> n.toString().split('').reverse().map(Number)

// pseudo code:
// defined a variable named digitize with a parameter of n 
// we attatched methods to the parameter to run as functions for a specific outpu
// since we know that we are getting a number passed in and it needs to be flipped we need to convert to a string to use other functions .toString() accomplishes this
//once its a string we need to split it so we can have individual numbers not just one large number .split('')  accomplishes this
//once they are split we need to revese the individual string values so .reverse() is used
// we need to get the array back to numbers instead of a string its currently set as ['3', '5'] and we want it as [3,5]
// we use map as it transforms the array into a new array and can run a function while this occurs via a callback. we run Number in the map which will convert the string values to number values. The callback in map would be the quivalent to running Number()