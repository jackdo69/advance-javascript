/**
 * Encapsulate means a few things,
 * 1. It means that instead of writing functions and objects
 * everywhere, we group them into a class, or method
 * inside the class or object, this is good for reusable and code structure
 *
 * 2. This is more related to Java, when properties inside
 * an object, or class is availabe to themselves,
 * outside can't alter it, unless with a setter
 */

/**
 * Encapsulation demonstration is slightly simpler in constructor function
 * than in class, but we will look at both
 */

type genderT = 'male' | 'female';
// 1. Let's try with class
class HumanC {
  protected _gender;
  constructor(gender: genderT) {
    this._gender = gender;
  }

  getGender() {
    return this._gender;
  }

  setGender(g: genderT) {
    this._gender = g;
  }
}

const james = new HumanC('male');
// console.log(james.#gender); // Private field must be declared in an enclosing tag
console.log(james);
console.log(james.getGender());
james.setGender('female');
console.log(james.getGender());

function HumanF(gender: genderT) {
  this.gender = gender;
  this.getGender = function () {
    return this.gender;
  };
  this.setGender = function (g) {
    if (g === 'male' || g === 'female') {
      this.gender = g;
    }
  };
}

const anna = new HumanF('female');
console.log(anna);
console.log(anna.gender); // undefined
console.log(anna.getGender());
anna.setGender('male');
console.log(anna.getGender());

export default {};
