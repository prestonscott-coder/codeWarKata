/*Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string*/

const reverseLetter = str => str.replace(/[^a-z]/g, "").split("").reverse().join("")

//Pseudo code
// use regex to replace all non-alphabetic characters with an empty string // the forward slash defines a regular expression (regex) and the [^a-z] the ^ means "not" and the a-z means all the lowercase letters from a to z. The g is a global flag to apply to the entire string not just the first match saying anything in this entire string that is not a lowercase letter from a to z should be replaced by an empty string 
// split the string into an array of characters
// reverse the array
// join the array back into a string and return it and will not have any non-alphabetic characters since we replaced them with an empty string