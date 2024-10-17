/*In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.*/

//first solution
//const findDifference = (a, b) => (a[0]*a[1]*a[2]>b[0]*b[1]*b[2]) ? a[0]*a[1]*a[2]-b[0]*b[1]*b[2] : b[0]*b[1]*b[2]-a[0]*a[1]*a[2]

//psuedo code 
// yes I know that I can use .reduce() to help solve this but was unsure how to do that on one line with having to use Math.abs
// since we were given the parameter having only 3 spots in the array I knew I technically didnt have to loop through like if there was a 1000

//I am going to write another function that accomplishes the same result, but will do it so it can have many more iterations to run through on the loop


//second solution
const findDifferenceOne = (a,b)=> Math.abs(a.reduce((acc,c)=> acc*c,1)-b.reduce((acc,c)=>acc*c, 1))

//psuedo code
//starts the same with an arrow fucntion that has the parameters set up to take two arrays in. 
// since we know that we are working with arrays I am going to use the reduce method that allows you to loop through each element in an array following the accumulator and the count
// since we knwo that we are finding the volume Length* Width * Height we know that if we start the count at 0 then each multiplication there after will keep returning 0
// we set the accumulator to 1 to avoid this so accumulator starts at 1 then gets multiplied by the first count which then becomes the new value inside of the accumulator. 
// once the loop is finished we wanted to evaluate the same for the second array so we did the same with b.reduce
// We also wanted to make sure that we returned a positive integer, some cases if a<b in standard math it would return a negative value which is what we dont want. 
// to avoid this we added the Math.abs() to the subtraction between the two .reduce() methods 
// Math.abs() is a method that makes sure we return a positive integer by finding the absolute value
// This line of code can run with any number of elements which is much better than the first initial solution

