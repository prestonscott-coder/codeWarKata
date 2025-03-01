// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

const findNeedle = haystack => `found the needle at position ${haystack.indexOf("needle")}`

// pseudo code:


// we set up an arrow function findNeedle with a parameter of haystack which is an array
// we knew that the only parameter we wanted was the element of "needle" we also wanted to know the index of the needle in the return. used a template literal to set up the return and searched the parameter of haystack array for the indexOf that matched "needle"