// Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = (numbers) => numbers.reduce((acc,c)=> acc + Math.pow(c,2) ,0)

console.log(squareSum([2,3,4]))

//pseudo code

// The arrow function of squareSum and the parameter of numbers is running an function that passes in an array. Once that array is passed in we are running the reduce method because it allows us to single out the individual number we are adding and square it. We do this by running the Math.pow() method on our count parameter, we set it to 2 so it knows to square it instead of another multiple. 