/*make an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!*/



const removeEveryOther = arr => arr.filter((_,i)=> i % 2 === 0)

// in the removeEveryOther function we are using the filter method to create a new array
// we use the index parameter of the filter method to check if the index is even using the modulo operator
// if the index is even we keep the element in the new array otherwise we remove it