/*You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.*/

const getAge =(inputString)=> Number(inputString[0])

//pseudo code 

//defined a variable with the name of getAge and parameter of inpuString
// we know that it will always be returned as a string but the first index is always the value we want as the age
// we run a function in the variable to convert inputString to a number 
// we dont want the full string to change just the first index as we know that is the number in string form we use the 0 index to connect 


