/**
 * Idea: Split input array recursively
 * until we reach array with length of 1
 * merge array that already sorted
 * This sorting method exploits the fact that
 * array of length 1 is ALWAYS sorted
 * Time complexity: O(nlogn)
 * logn is the time to split an array length n into multiple arrays of length 1
 * n is the number of comparision need to merge 2 sorted array
 */

//Note: this function only works when 2 input arrays are sorted

const data = require('./data.json');

function mergeSortedArray(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i <= arr1.length && j <= arr2.length) {
    if (arr1[i] && arr2[j]) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    } else {
      //case where 2 arrays are not in the same length
      if (arr1[i]) result = result.concat(arr1.slice(i));
      if (arr2[j]) result = result.concat(arr2.slice(j));
      i++;
      j++;
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let first = arr.slice(0, middle);
  let last = arr.slice(middle, arr.length);
  return mergeSortedArray(mergeSort(first), mergeSort(last));
}

console.log(mergeSort(data));
