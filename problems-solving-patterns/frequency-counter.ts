type inputT = Array<number>;
type frequenceT = { [key: number]: number };
function compare(arr1: inputT, arr2: inputT) {
  let frequency1: frequenceT = {};
  let frequency2: frequenceT = {};

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

  Object.keys(frequency1).forEach((k) => {
    let key = parseInt(k);
    if (!(key ** 2 in frequency2)) return false;
    if (frequency1[key] !== frequency2[key ** 2]) return false;
  });
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

export default {};
