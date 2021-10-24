/**
 * Variable assignment over function declaration
 * if we changed from 'var' to 'let', this will throw error ^^
 */

var foo = 20;
// let foo = 20;

function foo() {
  console.log("executing foo function");
}

console.log(typeof foo); // number

/**
 * Function declaration over variable declaration
 */

var baz;

function baz() {
  console.log("executing baz function");
}

console.log(typeof baz); // function
