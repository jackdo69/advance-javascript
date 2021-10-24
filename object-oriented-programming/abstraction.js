/**
 * The idea behind abstraction is let say we have a super class with 2 methods
 * 1 will be the same for every subclass, and one will need to implemented
 * in each subclass differently
 * In this case,the subclass only need to implement the second method
 *
 * The demonstration is not clear (or may be it's not even available) in javascript
 * so I take an example in typescript and show how it's compiled to Javascript
 * as below
 *
 */

/**
 * Typescript version
abstract class Person {
  protected name: string;
  protected work: string;
  constructor (name: string, work: string) {
    this.name = name;
    this.work = work;
  };

  sleep() {
    console.log('...sleeping..');
  }

  abstract working() : void;
}

class Student extends Person {
  private age: number;
  constructor(name: string, work: string, age: number) {
    super(name, work);
    this.age = age;
  }

  working() {
    console.log(`I am working as ${this.work}`)
  }
}
 */

/**The Student class MUST implement the working() {} method, and class Person
 * is marked as abstract class, so NO new instance can be initiated from it
 * 'protected' keywork simply means it can't be accessed from outside but can be used
 * in subclasses
 * 'abstract' keywork is place in front of working to make sure any class
 * that extends from Person abstract class MUST implement this method
 *
 * the code above be compiled to
 */

"use strict";
class Person {
  constructor(name, work) {
    this.name = name;
    this.work = work;
  }
  sleep() {
    console.log("...sleeping..");
  }
}
class Student extends Person {
  constructor(name, work, age) {
    super(name, work);
    this.age = age;
  }
  working() {
    console.log(`I am working as ${this.work}`);
  }
}
