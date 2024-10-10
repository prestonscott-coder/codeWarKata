/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3*/


const stray = (numbers) => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num))

//psuedo code 
// set an arrow function with a parameter of numbers that is to take in an array
// Then I want to run through the array so I use .find() method on the array 
// Each time I iterate through the array under the parameter of (num) I want to use the callback function  and run it on the array so that each parameter is tested to find how many times its found
// if the parameter in the first index of the array matches the last index then you know that it cant be your single number 