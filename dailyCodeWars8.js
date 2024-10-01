/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]*/


const countSheeps = (sheep)=> sheep.filter(data => data).length
 


//psuedo code 
// first we are passing an array into the parameter of sheep 
// then we are filtering through the array which has data of either true or false
// .length will output how long the array is a number and since we only want to loop filter out true to will retrun the correct num