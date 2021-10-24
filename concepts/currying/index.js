// Original
// Please forgive my dummy accounting formula ^^

function calProfitOriginal(revenue, expenses, tax) {
  const grossProfit = revenue - expenses;
  const netProfit = grossProfit - grossProfit * tax;
  return netProfit;
}

// Currying using the 'closure' of javascript
function calProfitCurry(revenue) {
  return function (expenses) {
    return function (tax) {
      const grossProfit = revenue - expenses;
      const netProfit = grossProfit - grossProfit * tax;
      return netProfit;
    };
  };
}

const calProfitArrow = (revenue) => (expenses) => (tax) => {
  const grossProfit = revenue - expenses;
  const netProfit = grossProfit - grossProfit * tax;
  return netProfit;
};

// Assuming we made 1000, our expenses is 300, tax is 10%

const origin = calProfitOriginal(1000, 300, 0.1);
const curry = calProfitCurry(1000)(300)(0.1);
const arrow = calProfitArrow(1000)(300)(0.1);

console.log(origin);
console.log(curry);
console.log(arrow);

/**
 * Thoughts
 * 1. Using curry together with arrow function makes much cleaner
 * 2. We can break the process
 */

//If we only have the curry function, but some the tax is different
const grossProfit = calProfitArrow(2000)(400);
const net1 = grossProfit(0.05);
const net2 = grossProfit(0.12);
const net3 = grossProfit(0.07);

console.log(`Tax is 5% ${net1}`);
console.log(`Tax is 12% ${net2}`);
console.log(`Tax is 7% ${net3}`);
