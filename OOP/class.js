class Computer1 {
  constructor(OS) {
    this.OS = OS;
  }

  turnOn() {
    console.log("..turning the machine on...");
  }
}

/**
 * the above is exactly the same as
 */

function Computer2(OS) {
  this.OS = OS;
}
Computer2.prototype.turnOn = function () {
  console.log("..turning the machine on...");
};

const jackpc = new Computer1("window");
console.log(jackpc);
const jillpc = new Computer2("window");
console.log(jillpc);
