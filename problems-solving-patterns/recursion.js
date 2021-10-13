// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  if (exp == 0) return 1;
  return base * power(base, (exp -= 1));
}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  let result = 1;

  function helper(array) {
    if (array.length === 0) return;
    result = result * array[0];
    return helper(array.slice(1));
  }
  helper(arr);
  return result;
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  let result = 0;
  function helper(input) {
    if (input === 0) return;
    result += input;
    return helper((input -= 1));
  }
  helper(num);
  return result;
}

// Fibonacci 1,1,2,3,5,8,13....
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
  let arr = [1, 1];
  let index = 2;
  function build(value) {
    let nextVal = arr[index - 2] + arr[index - 1];
    arr.push(nextVal);
    index++;
    if (index === num) return nextVal;
    return build(value + 1);
  }
  return build(index);
  // add whatever parameters you deem necessary - good luck!
}

console.log(fib(28));
