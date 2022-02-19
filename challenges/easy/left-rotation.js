/*
 * Problem - https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
 *
 */

function rotLeft(a, d) {
  // a = array, n = array length, d = number of rotations
  // on each cycle
  for (let rotations = 0; rotations <= d - 1; rotations++) {
    // copy the value in the first index in the array
    let displacedNumber = a.shift();

    // push it back in
    a.push(displacedNumber);
  }
  return a;
}
