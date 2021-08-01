/**
 * In Java, or even Typescript, we have the syntax of
 * function overloading
 * same function, different arguments will end up
 * doing different things
 * Javascript does not have this luxury, but we still
 * able to achieve the same thing
 */

class BankAccount {
  #amount = 0;
  constructor(amount) {
    this.#amount = amount;
  }

  deposit(...args) {
    if (args.length === 2) {
      let money = args[0] * args[1];
      this.#amount += money;
    } else {
      this.#amount += args[0];
    }
  }

  getAmount() {
    console.log(this.#amount);
  }
}

const account = new BankAccount(0);
account.deposit(100);
account.deposit(2, 100);
account.getAmount();

/**Polymorphism in inheritance */
class Person {
  introduce() {
    console.log("Hello, I am a person");
  }
}

class Developer extends Person {
  introduce() {
    super.introduce();
    console.log("I can code too");
  }
}

class Designer extends Person {
  introduce() {
    super.introduce();
    console.log("I can design cool things also");
  }
}

const person = new Person();
const dev = new Developer();
const designer = new Designer();
person.introduce();
dev.introduce();
designer.introduce();
