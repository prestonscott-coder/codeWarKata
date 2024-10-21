/*Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

const findSmallestInt = (arr)=> arr.sort((a,b)=> a-b).shift(arr[0])

//psuedo code 
// used an arrow function to run a function through the parameter of array
// the function is using the method .sort() to evaluate the numbers to asort them in ascending order
// when we order them numerically it still returns the whole array
// to get around this I used the .shift() method to pop off the first element and transform it into its own array which is the first index


