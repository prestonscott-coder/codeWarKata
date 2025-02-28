// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


const isIsogram = str => new Set(str.toUpperCase()).size == str.length

// pseudo code:

//so we wanted a return of true or false, how we resolved that is by if we evaluate a string, does it have any repeating letters, not matter the case.
// if yes, then we return false, if not then we return true
// set up a ternary so we have implicit return 
// we used new Set() so that we only store unique values we made sure that case didnt matter with toUpperCase() and ran to find the size of the string
// we then compared to the old strings length. We know that if they matched that there were no repeating letters and if it didnt match then we knew that it did have repeating

// ex
//isIsogram("hello") 4 == 5 is false
//isIsogram ("world") 5 == 5 is true 