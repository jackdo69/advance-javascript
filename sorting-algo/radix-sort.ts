/**
 * This sorting algo ONLY works with numbers
 * It does not use any comparision :)
 *
 * Idea: We create 10 buckets: 0 -> 9
 * then we check each digit of the number
 * (start from the right) and
 * place them into corresponding buckets
 * once done, we put them back into list
 * and put them back to the list from the
 * bottom of each bucket, if the number
 * does not have the digit, we use 0
 * even not comparing ,but putting into
 * ordered buckets, the numbers will be sorted
 * Time complexity: O(nk)
 *
 */
const data = require('./data.json');

function getDigit(num: number, pos: number) {
  return (
    ((Math.abs(num) % Math.pow(10, pos)) -
      (Math.abs(num) % Math.pow(10, pos - 1))) /
    Math.pow(10, pos - 1)
  );
}

function countDigit(num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigit(arr: number[]) {
  let mostDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    mostDigit = Math.max(mostDigit, countDigit(arr[i]));
  }
  return mostDigit;
}

function radixSort(arr: number[]) {
  //get most digit to determine the number of loop time
  let times = mostDigit(arr);

  //start looping
  for (let i = 1; i < times; i++) {
    //create bucket
    let buckets = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < arr.length; k++) {
      let item = arr[k];
      let digit = getDigit(item, i);
      buckets[digit].push(arr[k]);
    }
    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(radixSort(data));

export default {};
