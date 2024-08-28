/*
A rectangle can be split up into a grid of 1x1 squares, 
the amount of which being equal to the product of the two dimensions of the rectangle. 

Depending on the size of the rectangle, 
the grid of 1x1 squares can also be split up into larger squares.
For example, a 3x2 rectangle has a total of 8 squares as there are 6 distinct 1x1 squares, 
and two possible 2x2 squares. A 4x3 rectangle contains 20 squares.

Your task is to write a function `findSquares` that returns the total number of squares for any given rectangle, 
the dimensions of which being given as two integers with the first always being equal to or greater than the second.
*/


// Solution

/*
(x-0) * (y-0) (x-1) * (y-1) (x-2) * (y-2) (x-3) * (y-3) ... (x-n) * (y-n)
Where n is min(x, y).
This series looks a lot like the series of square numbers 1, 4, 9, ..., n^2]. 
In fact, make x = y and flip it over and it's exactly the series of square numbers up to (n-1)^2.
*/

const findSquares = (x, y) => y * (y + 1) * (y - (3 * x) - 1) / -6;

// or

function findSquares(x, y) {
  let s = 0
  while (x && y) s += x-- * y--
  return s
}