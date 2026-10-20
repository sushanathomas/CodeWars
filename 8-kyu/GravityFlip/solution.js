//Instruction: 
/*Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.
There are some columns of toy cubes in the box arranged in a line. The `i`-th column contains `a_i` cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, `d`, which can be either `'L'` or `'R'` (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

```
+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+

```

Given the initial configuration of the cubes in the box, find out how many cubes are in each of the `n` columns after Bob switches the gravity.
Examples (input -> output:

```
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

*/

//const flip=(d, a)=>{
  //TODO
//  return 
//}

//Psudeo Code: 
/*function flip(direction, columns):
    if direction is 'R':
        sort columns from smallest to largest
    else:  (direction is 'L')
        sort columns from largest to smallest

    return columns 
    */
  /* function sort(columns, compare):
    for each pair of neighbors (x, y) while sorting:
        result = compare(x, y)

        if result is negative:  x goes before y
        if result is positive:  y goes before x
        if result is zero:      keep their order

ascending compare:   x - y   (smaller number comes first)
descending compare:  y - x   (bigger number comes first)*/ 

//Answer: 

const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x); 