/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]*/

const number = array => array.map((a,b)=>`${b+1}: ${a}`)

//using map to create a new array
// this array is structured as a template literal that takes the index and adds 1 so we start at 1 
// inside of there we are saying take that new index as a holder and have it set up so to the right it returns the element from the original array 

//["a", "b", "c"]), ["1: a", "2: b", "3: c"]