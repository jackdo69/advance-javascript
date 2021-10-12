function compare(arr1, arr2) {
  let frequency1 = {};
  let frequency2 = {};

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i of arr1) {
    frequency1[i] ? (frequency1[i] += 1) : (frequency1[i] = 1);
  }
  console.log(frequency1);

  for (let i of arr2) {
    frequency2[i] ? (frequency2[i] += 2) : (frequency2[i] = 1);
  }
  console.log(frequency2);

  for (let k in frequency1) {
    if (!(k ** 2) in frequency2) return false;
    if (frequency1[k] !== frequency2[k ** 2]) return false;
  }
  return true;
}

let arr1 = [2, 4, 1, 6];
let arr2 = [1, 4, 16, 36];
console.log(compare(arr1, arr2)); // => true

/**
 * Ideas: Using object to store the number of frequency of a item
 * Benefits: accessing keys inside object is super fast
 * Space Complexity: O(1)
 * Time complexity: O(n)
 */
