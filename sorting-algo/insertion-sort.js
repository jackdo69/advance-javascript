const swapArrayItem = require('./swap');
const data = require('./data.json');
/**
 * The concept is we start with the sorted portion
 * of the array (the first element) then compare the next
 * element (outside the portion) and 'insert' it
 * to the correct place of the sorted portion until
 * the sorted portion length equal the origin array
 * in this sorting algorithm, we don't use swapArrayItem
 * but rather a "Shift and Insert" kinda way
 */

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i + 1]; // this is the value we need to insert
    for (let j = i + 1; j > -1; j--) {
      if (currentVal < arr[j]) {
        //as long as the currentVal < arr[j], we move it to the left
        arr[j + 1] = arr[j]; //move the item bigger 1 index to the right;
        arr[j] = currentVal; //insert the value to the right spot
        //Note: because the array on the left already sorted,
        // we will CONTINUE this 'insert' operation UNTIL currentVal > arr[j]
      }
    }
  }
  return arr;
}

const result = sort(data);
console.log(result);
