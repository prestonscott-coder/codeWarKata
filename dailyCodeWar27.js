// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Input strings will only contain letters.

const friend = (friends) => friends.filter((name)=> name.length === 4) 

//pseudo code

// I am used the .filter() method because it will transform the array to a new array and we can decide what that out put will be by running an arrow function with a conditional. 