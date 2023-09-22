/*
 * Let’s write a function that generates all possible pairs out of provided letters
 * Total time complexity (tc) = array.length * array.length * 1 = O(array.length^2)
 */

const getAllPossiblePairsOf = (arr) => {
  let count = 0;

  // get all pairs and pair sums of elements in the array,

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        console.log(arr[i], arr[j]);
        if (arr[i] + arr[j] === 6) {
          count++;
        }
      }
    }
  }

  return count;
};

let inputs = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];

inputs = inputs.forEach((array) => {
  console.log(getAllPossiblePairsOf(array));
  console.log("----------------------------");
});
