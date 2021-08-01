/**
 * 'this' keyword in object refer to the object itself
 */

const bob = {
  name: "Bob Marley",
  age: 25,
  sleep() {
    //writing like this or using function like below is exactly the same
    console.log("sleeping...");
  },
  greeting: function () {
    console.log("Hi there, would like some music!");
  },
  introduce: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(bob);
bob.sleep();
bob.introduce(); // Hello, my name is Bob Marley

/**
 * It's obvious in this example, but 'this' keyword becomes useful
 * once we use constructor function to create object, then the value
 * changes according to the object that was created
 */

/** create object using constructor function */
function Animal(type) {
  this.type = type;
}

/** create object using class */

class Bird {
  constructor(type) {
    this.type = type;
  }
}

/** either way, 'this' will always point to the object that they created */
