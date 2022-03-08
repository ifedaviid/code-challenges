const findClosestElement = (arr, target) => {
  let differences = [];

  for (let i = 0; i < arr.length; i++) {
    differences.push(Math.abs(arr[i] - target));
  }

  const indexOfLeastDifference = differences.indexOf(Math.min(...differences));

  return arr[indexOfLeastDifference];
};

const array = [12, 20, 31, 14, 25, 63, 74, 58, 96, 70, 81, 34];
const target = 0;

const closestElement = findClosestElement(array, target);

console.log(
  `The closest element to ${target} in your array is ${closestElement}`
);
