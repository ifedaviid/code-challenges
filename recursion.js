/*

Recursion

*/

function nonRecursiveFactorial(n) {
  // base case
  if (n === 0 || n === 1) return 1;
  let factorial = n;
  while (n > 1) {
    // console.log(n, factorial);
    factorial = factorial * (n - 1);
    n--;
  }
  return factorial;
}

function recursiveFactorial(n) {
  // base case
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * recursiveFactorial(n - 1);
  }
}

function nonRecursivePower(n) {
  // let result = n;
  let counter = 0;
  while (counter < n) {
    n *= n;
    counter++;
  }
  return n;
}

function recursivePower(n) {
  if (n === 0) return 1;

  n *= recursivePower(n - 1);

  return n;
}

/*
counter     n     calc
0           5     5*recursivePower(n)
1           5     5*recursivePower(n)
2           5     5*recursivePower(n)
3           5     5*recursivePower(n)
4           5     5*
*/

let number = 3;

console.log(
  `Non-recursive factorial of ${number} is =`,
  nonRecursiveFactorial(number)
);

console.log(
  `Recursive factorial of ${number} is =`,
  recursiveFactorial(number)
);

console.log(
  `Non-recursive calculation of ${number} ^ ${number} is =`,
  nonRecursivePower(number)
);

console.log(
  `Recursive calculation of ${number} ^ ${number} is =`,
  recursivePower(number)
);
