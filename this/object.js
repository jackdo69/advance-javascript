/**
 * 'this' keyword in object refer to the object itself
 */

const bob = {
  name: "Bob Marley",
  age: 25,
  greeting: function () {
    console.log("Hi there, would like some music!");
  },
  introduce: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

bob.introduce(); // Hello, my name is Bob Marley

/**
 * It's obvious in this example, but 'this' keyword becomes useful
 * once we use constructor function to create object, then the value
 * changes according to the object that was created
 */
