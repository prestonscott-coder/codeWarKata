//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

//For example:

//solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//solution(null); // should return []

const solution = nums => nums != null? nums.sort((a,b)=>a-b):[]

//prep

// we are given an array of numbers that we need to sort in ascending order
// if the array is null or empty we need to return an empty array
// we can use the sort method with a compare function to sort the numbers in ascending order
// we will also check if the input is null and return an empty array in that case      

// solution([-99, 27,-1,10]) should return [-99,-1,10,27]
// solution([]) should return []
// solution(null) should return []

