/**
 * 'this' keyword in object refer to the object itself
 */

const bob = {
  name: 'Bob Marley',
  age: 25,
  sleep() {
    //writing like this or using function like below is exactly the same
    console.log('sleeping...');
  },
  greeting: function () {
    console.log('Hi there, would like some music!');
  },
  introduce: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  showWindow: () => {
    console.log(this);
  },
};

console.log(bob);
bob.sleep();
bob.introduce(); // Hello, my name is Bob Marley
bob.showWindow();

/**
 * It's obvious in this example, but 'this' keyword becomes useful
 * once we use constructor function to create object, then the value
 * changes according to the object that was created
 */

/** create object using constructor function */
function Animal(type: string) {
  this.type = type;
  console.log('This inside Animal when call new', this);
}
const abe = new Animal('monkey'); //this refered to object created by Animal()
Animal('cat'); // this referred back to the Window object

/** create object using class */

class Bird {
  private type: string;
  constructor(type: string) {
    this.type = type;
  }
}

/** either way, 'this' will always point to the object that they created */
