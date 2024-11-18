/*The museum of incredibly dull things
The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]*/

const removeSmallest=(number)=> {
    if (number.length === 0) return[];
    const smallestValue = Math.min(...number);
    const indexToRemove = number.indexOf(smallestValue);
    return[...number.slice(0,indexToRemove), ...number.slice(indexToRemove +1)];
  }
  
  console.log(removeSmallest([4,5,6,2,3]))

  // I orginally use the following code but realized that it changed the order of the array and that is not what was the question was asking for so I had to approach it another way
  /*const removeSmallest = (numbers)=> numbers.sort((a,b)=>a-b).splice(1,numbers.length-1)

    console.log(removeSmallest([4,5,6,2,3]))*/

//psuedo code for the solution
//we set up the as an arrow function with the parameter passed in as an array called number
// from there we want to make sure that if we get an empty array that we still return something. We evaluate the length of the array and if we find that there are no elements we set it up to return an empty array back 
// we define a variable for the samllestVariable and use the Math.min() function to find it on the array the ... splits the list into multiple numbers so the function can determine what the lowest is 
// we set another variable to indexToRemove and run the method of indexOf on the smallestValue variable defined above it
//we then want to return   ...number.slice(0, indexToRemove) gets elements before the smallest value, and ...number.slice(indexToRemove + 1) gets the elements after it. Both slices are merged using the spread operator.