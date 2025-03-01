// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)




const hero = (bullets, dragons)=> bullets >= dragons * 2 ? true : false

// pseudo code:
// we know that we have a parameter of bullets and dragons. Each dragon will take 2 bullets to kill. we want the return to be either true or false. we run a condidtional that checks to see if we have 2x the bullets of dragons. if we do then we have enough and should return true otherwise we return false.