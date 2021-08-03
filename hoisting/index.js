/**
 * Keynotes to remember
 *
 * 1. Hoisting: The action of javascript to put functions and variables
 * declaration to the top of its block (ONLY the declaration, NOT the assignment)
 */

function fn() {
  var name = "alex";
  console.log(name);
  var age = 12;
  console.log(age);
}
// when execution becomes
function fn() {
  var name;
  var age;
  name = "alex";
  console.log(name);
  age = 12;
  console.log(age);
}

// when we do
var foo = "hello";
// javascript always do
var foo;
foo = "hello";

/**
 * 2. variables are not existed until we declare them
 * if we assign value to them before declaration, they become global variables
 */

function baz() {
  a = 20;
  var b = 10;
}
baz();
console.log(a); // 20
// console.log(b); // ReferenceError due to block scope

/**
 * 3. Functions declarations are hoisted, but expressions are not
 */

f1(); // Function f1 is called

function f1() {
  console.log("Function f1 is called");
}

// f2(); // TypeError f2 is not a function

f2 = function () {
  console.log("Function f2 is called");
};

/**
 * 4. 'const' and 'let' are block scope, which is why they are recommended to use
 * over 'var'
 */

console.log(name1); // undefined
var name1 = "july";

// console.log(name2); // ReferenceError: name2 is not defined
let name2 = "beth";
