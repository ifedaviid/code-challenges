// ********************************************************* 1. input values

const h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
];

const word = "zaba";

// ********************************************************* 2. algorithms

function getAlphabeticIndex(alphabet) {
  // Create an alphabetical array 1-26
  const ALPHABETS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return ALPHABETS.indexOf(alphabet) + 1;
}

function designerPdfViewer(h, word) {
  console.log("Given the array - ", h);
  console.log("Given the word - ", word);

  // Convert array of letters to array of numbers (heights)
  let numericalWordLetters = [];
  let wordLetters = word.trim().split("");
  wordLetters.forEach((wordLetter) => {
    let alphabeticIndex = getAlphabeticIndex(wordLetter);
    numericalWordLetters.push(h[alphabeticIndex - 1]);
  });
  // Select highest height and multiply by word length
  return Math.max(...numericalWordLetters) * wordLetters.length;
}

// ********************************************************* 3. execute function

const result = designerPdfViewer(h, word);

console.log("Calculated output - ", result);
