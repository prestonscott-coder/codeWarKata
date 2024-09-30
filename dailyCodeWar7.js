/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!*/

const squareDigits = (num) => Number(num.toString().split('').map(i => i*i).join(''))

/*psduo code 

1. created an arrow function with a parameter of num
2. we wanted to separate every number so we could square it individually 
since split and join are prototypes for strings in arrays we needed to convert any numbers to a string while making sure that we have a number stil
3. once we separated the number we wanted to return it so we used map to create a new array and passed in iterator to multiply itself with itself
4. once we had each individual number squared in the string it was time to join it and it returned back to a number because of the Number infront of the ternary.

