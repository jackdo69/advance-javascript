/**
 * Although 'this' inside normal function is decided when that function is declared
 * in some cases, if we don't want to write our own custom function, we can change this context
 * with 'bind', 'apply' and 'call'
 */

/**
 * 1. Bind
 */

const alex = {
  name: 'Alex',
  getName: function () {
    return this.name;
  },
};
const unbound = alex.getName;
const laura1 = {
  name: 'Laura',
};

const bound = unbound.bind(laura1);
console.log(bound());

/**
 * 2. Apply
 */

// in when we push an element to array, we use Array.push()
// but if we have an array of elements and we want to push each
// element, loop is not a goop option

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push.apply(arr1, arr2);
console.log(arr1);

/**
 * apply accept first argument as this, second as the arguments that the function we are target
 */

/**
 * 3. Call
 */

function Person(name: string, age: number) {
  this.name = name;
  this.age = age;
}

function Student(name: string) {
  Person.call(this, name, 5);
}

const jack = new Student('jack');
console.log(jack);
