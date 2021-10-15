//Merge 2 sorted arrays
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
