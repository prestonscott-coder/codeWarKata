// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
    for (const el of a){
      if( el > limit){
        return false
      }
    }
    return true 
  }
  
  console.log(smallEnough([1,4,4,9,7,2,4],6),false)

  //pseudo code 

  // we were provided an array of numbers and a random limit number that was undefined
  // we had to evaluate each number of the array against the limit number to see if it was greater than the limit number
  // if the evaluation came back as higher then we know we needed to return false
  // We ran a for of loop through the array with the parameter set as el 
  // once we had that set up to run through each element from the array we needed a way to compare 
  // the use of if statement provided that, but we needed to leave off any else if or else becasue we wanted to evaluate for each element in the array, not just the first.
  