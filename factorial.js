let number = 10;

const calculateFactorial = (n) => {
  if (n === 0 || n === 1) return 1;
  let factorial = n;
  console.log(n, factorial);
  while (n > 1) {
    console.log(n, factorial);
    factorial = factorial * (n - 1);
    n--;
  }
  return factorial;
};

const factorial = calculateFactorial(number);
console.log("factorial is =", factorial);
