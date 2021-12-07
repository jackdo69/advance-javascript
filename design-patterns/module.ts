/**
 * Moudle pattern is a simple way
 * to expose the API, whereas keep some fields
 * private for use
 */

const counter = (function () {
  let val = 0;
  return {
    increment: function () {
      val++;
    },
    decrement: function () {
      val--;
    },
    getVal: function () {
      return val;
    },
  };
})();

console.log(counter.getVal());
counter.increment();
counter.increment();
console.log(counter.getVal());
