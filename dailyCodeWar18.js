/*Write a function that removes the spaces from the string, then return the resultant string.

Examples (Input -> Output):

"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"*/

const noSpace = (x)=> x.split(' ').join('')

//psuedo code 
// set up the arrow function of noSpace with a parameter of x 
// we run the method .split(' ') to get everything inside of the string spaced out and in their own string
// we then run .join('') to get all the strings back into one string and since we do not have a space between the '' it should remove all the spaces that were originally there. 
