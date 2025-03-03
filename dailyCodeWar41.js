// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


const between = (a,b)=> {
    let result = []
    for ( i = a; i <=b; i++){
    result.push(i)
    }
    return result
  }

  
  //psuedo code
  // I am going to create a function that takes two parameters a and b.
  // I will create an empty array called result.
  // I will then use a for loop to iterate through each number from a to b. starting from parameter a and then going up to parameter b since we know that a will alway be less than b
  // In each iteration, I will add the current number to the result array.
  // After the loop finishes, I will return the result array.
  
