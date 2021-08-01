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

//1. From the root object
Object.prototype.alo = function () {
  console.log("Alo......");
};

Object.assign(Object.prototype, {
  party() {
    console.log(`Let's have some fun!!`);
  },
});
//2. Using Object.create()
const updatedPrototype = {
  run: function () {
    console.log("..running....");
  },
  sleep: function () {
    console.log("..sleeping....");
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
jimmy.sleep(); // ..sleeping....
jimmy.alo(); // Alo........
console.log(jimmy.hasOwnProperty("name")); // true

//3. Using prototype property
// The way we do below is also called an constructor function,
// a function is called by using 'new' key word
function Cat(name) {
  this.name = name;
  this.sleep = function () {
    // writing method in the instance
    console.log("..sleeping....");
  };
}

//Notice function also has prototype, which why we said function is
//an object itself
Cat.prototype.run = function () {
  // writing method in the prototype
  console.log("..running....");
};

const tom = new Cat("Tom Cruise");
console.log(tom);
tom.run();
tom.sleep();
tom.alo();
/** Notice the slightly difference between 'jimmy' and 'tom' in the console, Tom has a 'Cat' character in the front ^^
 * another interesting part is that, whereas 'jimmy' both the method stays inside the '__proto__' property
 * with 'tom', only the 'run' not the 'sleep'
 */

/**
 * SUM UP
 * '__proto__' is a property that inherits by default from the Object
 * we can alter it by using '.prototype', NOT '.__proto__'
 * and of course, we can alter it from the root, the Object itself
 * everything in the '__proto__' can be accessed by the object
 */

const ben = Object.create(Dog.prototype);
console.log(ben);
// ben.run(); // ben.run is not a function;

const lily = Object.create(Cat.prototype);
lily.run();
