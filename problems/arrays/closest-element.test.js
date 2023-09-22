const closestElement = require("./closest-element");

const array = [12, 20, 31, 14, 25, 63, 74, 58, 96, 70, 81, 34];
const target = 0;

test("Find closest element to x in an array", () => {
  expect(closestElement(array, target)).toBe(12);
});
