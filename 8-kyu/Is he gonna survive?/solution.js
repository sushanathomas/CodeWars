/*
Instructions: A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

function hero(bullets, dragons){
//Get Coding!
}
*/

function hero(bullets, dragons) {
    let bulletsNeeded = dragons * 2;
    return bullets >= bulletsNeeded;
}




/*
Steps: 
// Each dragon requires 2 bullets to defeat.
// Multiply the number of dragons by 2 to find
// the total number of bullets needed.
 // Compare the bullets the hero has
// with the number of bullets needed.
// >= means greater than or equal to.
// Return true if the hero has enough bullets.
// Otherwise, return false.
*/