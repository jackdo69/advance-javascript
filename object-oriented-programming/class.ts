class Computer1 {
  private OS: string;
  turnOff: () => void;
  constructor(OS: string) {
    this.OS = OS;

    this.turnOff = function () {
      console.log('.. turning off the machine..');
    };
  }

  turnOn() {
    console.log('..turning the machine on...');
  }
}

/**
 * the above is exactly the same as
 */

function Computer2(OS: string) {
  this.OS = OS;
  this.turnOff = function () {
    console.log('.. turning off the machine..');
  };
}
Computer2.prototype.turnOn = function () {
  console.log('..turning the machine on...');
};

const jackpc = new Computer1('window');
console.log(jackpc);
const jillpc = new Computer2('window');
console.log(jillpc);
/**
 * Notice that the constructor() function in class is very similar
 * to the constructor function we use in second example
 * when we use the 'new' keyword, the constructor() function is called
 * first
 */

/**
 * Notice that using both way, we have 2 objects, both with '__proto__'
 * property, but inside that property, we got the 'constructor' which
 * is slightly difference, but then the '__proto__' inside the '__proto__'
 * is the same, which both point to the Object.prototype
 * this is also an example of what we called the 'prototype-chain'
 */
