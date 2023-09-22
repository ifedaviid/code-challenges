/*

Given an array of sorted integers. 
We need to find the closest value to k ina given array. 
Array may contain duplicate values and negative numbers. 

*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = Math.max(...array);
let min = Math.min(...array);
let k = Math.floor(Math.random() * (max - min) + min);

// brute force

let newArray = [];

array.sort();

// create a subset
for (let i = 0; i < array.length; i++) {
  // if k = 10, N = 10, N > i if N - i < 0 => find largest number
  if (k - array[i] < 0) {
    newArray = array.slice(0, i);
    break;
  }
}
