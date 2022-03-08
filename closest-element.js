const findClosestElement = (arr, target) => {
  let differences = [];

  for (let i = 0; i < arr.length; i++) {
    differences.push(Math.abs(arr[i] - target));
  }

  const indexOfLeastDifference = differences.indexOf(Math.min(...differences));

  return arr[indexOfLeastDifference];
};

module.exports = findClosestElement;
