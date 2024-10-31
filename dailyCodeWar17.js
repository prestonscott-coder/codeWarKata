/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

const abbrevName = (name)=> name.split(' ').map((i)=> i[0].toUpperCase()).join('.')

//psuedo code
//  we are taking in a parameter by the name of name for the function abbrevName
// what is passed into the parameter will first be split ex 'Daily Code' would be split to 'Daily' 'Code'
// we then use the .map() method to run through that array the first word will take the element at index 0 and make sure that it transformes to a new array with an uppercase it will do the same for each element in that array
// the result will be 'D' 'C'   
// then we are joining the two elements together with .join('.') the . will come between the two merging elements 'D.C' will be the returned code. 