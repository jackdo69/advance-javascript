const swapArrayItem = require('./swap');
const data = require('./data.json');
/**
 * Instead of keep swapping to move the
 * largest item to the end
 * selection sort find the smaller item
 * in the first two, then compare it with the rest
 * once it hit the end of the array, that smallest
 * item will be swap with the first item
 * Time complexity: O(n2)
 */

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let pointer = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[pointer] > arr[j]) {
        pointer = j; //pointer is the index of the smallest
      }
      if (j === arr.length - 1) {
        swapArrayItem(arr, i, pointer);
      }
    }
  }
  return arr;
}

const result = sort(data);
console.log(result);
