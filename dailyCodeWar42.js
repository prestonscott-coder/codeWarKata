// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    if(num >= 0){
      return num - num*2
    }else{
      return num
    }
  }

  // psuedo code
  // I am going to create a function that takes in a number.
  // If the number is greater than or equal to 0, I will subtract it from itself (num - num*2) to make it negative.
  // If the number is less than 0, I will just return the number as it is already negative.