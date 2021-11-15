/**
 * The name 'bubble' came from the idea that the
 * bigger item (or smaller) will be bubble up and move
 * to the end (or beginning)
 * Time complexity: O(n2)
 */
import swapArrayItem from './swap';
const data = require('./data.json');

function sort(arr: number[]) {
  let end = arr.length - 1;
  let notFinish = true;
  /**
   * some optimization, if no swap is done
   * then the array is already swap
   * this is used for case when most of the array
   * is sorted
   */
  while (end > 0 && notFinish) {
    notFinish = false;
    for (let index = 0; index < end; index++) {
      if (arr[index] > arr[index + 1]) {
        swapArrayItem(arr, index, index + 1);
        notFinish = true;
      }
    }
    end -= 1;
  }
  return arr;
}

const result = sort(data);
console.log(result);

export default {};
