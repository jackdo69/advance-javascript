/**
 * Idea: We start with a pivot, and try to find the correct position of
 * it in the final sorted array
 * Implement: Choose the first element in the array
 * then compare it with all the other items
 * count the number of item that less than the pivot,
 * swap the pivot with the count
 * once swap, we do recursively the process
 * with array on the start and on the end
 */

const swap = require('./swap');
const data = require('./data.json');

function findPivot(arr, start, end) {
  // This function will move the 1st element of the array to the correct index
  // then return that index
  let count = start;
  let val = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (val > arr[i]) {
      count++;
      swap(arr, count, i);
    }
  }
  swap(arr, start, count);
  return count;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivot = findPivot(arr, start, end);
    if (start < pivot) quickSort(arr, start, pivot - 1);
    if (end > pivot + 1) quickSort(arr, pivot + 1, end);
  }
  return arr;
}

console.log(data);
console.log(quickSort(data));
