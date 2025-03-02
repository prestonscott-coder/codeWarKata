// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.



const feast = (beast, dish)=> {
    if (dish.endsWith(beast[beast.length-1]) && dish.startsWith(beast[0])){
      return true
    }else{
      return false
    }
  }

  //psuedo Code
  // so we knew that we had two strings being passed in as parameters, we knew that they would never not start with or end with a letter.
  //I approached this imagining the string to be in an array. I used a string method of starts with and ends with to evalue the the first and last element.
  // we ran the conditional to see if the first and last letters matched. if they did we would return true and if not we would return false. Technically we dont need the return since its implicit return, but in the case of comparison I believe that it increase the readability for other developers. 