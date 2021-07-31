/**
 * javascript is a prototype-based Object-Oriented language
 */

const table = {
  type: "office",
  material: "wood",
};

console.log(table); // {type: 'office', material: 'wood'}
console.log(table.hasOwnProperty("material")); // true
console.log(table.hasOwnProperty("name")); //false
/**
 * the 'hasOwnProperty' does not show up when you console.log the table,
 */

console.log(Object.prototype); //this is identical to the line below, in other words, an object __proto__ is the same as Object.prototype
console.log(table.__proto__); // this only show on browser, not in Node

/**
 * 'prototype' is the property of Object, and every object in javascript has access to this property by default, which shows in its '__proto__'
 */

/**
 * Overriding '__proto__'
 */

// Using Object.create()
const updatedPrototype = {
  run: function () {
    console.log("..running....");
  },
};

function Dog(name) {
  let obj = Object.create(updatedPrototype);
  obj.name = name;
  return obj;
}

const jimmy = Dog("Jimmy");
console.log(jimmy);
jimmy.run(); // ..running....
console.log(jimmy.hasOwnProperty("name")); // true

// Using 'new' keyword
function Cat(name) {
  this.name = name;
}

//Notice function also has prototype, which why we said function is
//an object itself
Cat.prototype.run = function () {
  console.log("..running....");
};

const tom = new Cat("Tom Cruise");
console.log(tom);
tom.run();
