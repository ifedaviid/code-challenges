/*
 * Let’s write a function that generates all possible pairs out of provided letters
 * Total time complexity (tc) = array.length * array.length * 1 = O(array.length^2)
 */

const getAllPossiblePairsOf = (array) => {
  // tc = 1
  const pairs = [];
  // tc = array.length
  for (let i = 0; i < array.length; i++) {
    // tc = array.length
    for (let j = 0; j < array.length; j++) {
      // tc = 1
      pairs.push([array[i], array[j]]);
    }
  }
  return pairs;
};

let inputs = [
  ["a", "b"],
  ["a", "b", "c"],
  ["a", "b", "c", "d"],
];

inputs = inputs.forEach((array) => {
  console.log(getAllPossiblePairsOf(array));
  console.log("----------------------------");
});
