// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


const solution = (str, ending)=> str.endsWith(ending);

//pseudo code. 
// the function solution has 2 strings passed in. In order for this to work we need to have the second string be the same ending as the first string that was passed in. We will use the string method of .endsWith to accomplish this. It will return a t/f if the evaluation is correct when comparing the ending of the first string to the entirety of the second one. 