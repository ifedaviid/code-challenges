// function here

const getLongestWord = (arrayOfStrings) => {
  const arrayLength = arrayOfStrings.length;
  const arrayOfStringLengths = [];
  for (let i = 0; i < arrayLength; i++) {
    arrayOfStringLengths.push(arrayOfStrings[i].length);
  }

  let longestLength = Math.max(...arrayOfStringLengths);

  return arrayOfStrings.filter((string) => string.length === longestLength);
};

// execute here

const input = [
  "aa",
  "bbb",
  "cccc",
  "ddddd",
  "e",
  "fgh",
  "sesdfsasdasaa",
  "sesdffffdasaa",
];

console.log(getLongestWord(input));
