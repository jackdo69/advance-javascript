function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let j = 1;
  if (arr.length === 0) return 0;
  while (j < arr.length) {
    if (arr[j] > arr[i]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}
let arr = [-2, -2, -1, 0, 0, 1, 1, 2]; // => 5
console.log(countUniqueValues(arr));

/**
 * Space complexity: O(1)
 * Time complexity: O(n)
 */
