/*Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)*/

const summation = num => num * (num+1)/2

//Pseudo code
// using algorithm for summation of first n natural numbers which is n(n+1)/2 where n is the input number and return the result

// this makes it much more efficient than using a loop to iterate through all the numbers from 1 to num and adding them together which would have a time complexity of O(n) while this algorithm has a time complexity of O(1) since it only requires a constant number of operations regardless of the input size