/*Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]*/

const sortByLength = array => array.sort((a,b)=>a.length-b.length)

//array is holding strings of varying lengths
//The goal is to get them in an order with the shortest string at the front and each sequental string getting larger until you reach the end which will be the largest string 
