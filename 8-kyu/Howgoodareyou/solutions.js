/* Description
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
}
*/

function betterThanAverage(classPoints, yourPoints) {
    let total = 0;

    for (let i = 0; i < classPoints.length; i++) {
        total = total + classPoints[i];
    }

    total = total + yourPoints;

    let average = total / (classPoints.length + 1);

    return yourPoints > average;
}

/*
PREP: 
Parametes - (classPoints, and yourPoints) [classPoints reporesents an array containing all your classmates' individual scores.(which i)] 
[yourPoints - is my point]
Return - True or False (boolean)
Example - classPoints = ([70, 80, 90], 95]), yourPoint = 95; 
 so 70+80+90+95 = 335 / 4 = 83.75
Psuedocode - 
// We need calculate the average before comparing it with yourPoints
// Add all the numbers together, from the example: classPoints - [70 = 80 + 90 + 95]; = 240 / 3

*/