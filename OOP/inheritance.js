/**
 * Let's implement the inheritance in 2 ways
 */

//1. Using class
// Please note the use of 'super' which means recall the superclass
class HumanC {
  constructor(name) {
    this.name = name;
    this.eat = function () {
      //this function will appear in the instance
      console.log("..eating..");
    };
  }

  sleep() {
    //this function will appear in the '__proto__' field
    console.log("..sleeping..");
  }
}

class TeacherC extends HumanC {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach() {
    console.log("..teaching..");
  }

  sleep() {
    //by doing this, we have 'sleep' function in '__proto__' and also the original in the inner '__proto__'
    super.sleep();
    console.log("..teacher too tired...");
  }
}
const laura = new TeacherC("Laura", "maths");
console.log(laura);
/**
 * in 'laura' object, there is '__proto__' field, which is the prototype of Teacher
 * inside this we have another '__proto__' field, which is the prototype of Human
 */
laura.sleep();

//2. Using Object.create()

const humanConstructor = {
  eat() {
    console.log("..eating..");
  },
  sleep() {
    console.log("..sleeping..");
  },
};

function HumanF(name) {
  const obj = Object.create(humanConstructor);
  obj.name = name;
  return obj;
}

const teacherConstructor = {
  teach() {
    console.log("..teaching..");
  },
  //   sleep() {
  //     humanConstructor.sleep();
  //     console.log("..teacher too tired...");
  //   },
};

function TeacherF(name, subject) {
  const obj = HumanF(name);
  obj.subject = subject;
  Object.setPrototypeOf(obj, teacherConstructor);
  return obj;
}

const ben = TeacherF("Ben", "physics");
console.log(ben);
ben.teach();
//Up to this point, even 'ben' was created from 'HumanF', ben still not able to 'sleep()'
// There is 2 ways of doing this, either add sleep() in teacherConstructor or use
// Object.setPrototypeOf
//We will change teacherConstructor
Object.setPrototypeOf(teacherConstructor, humanConstructor);
ben.sleep();

/**
 * NOTES:
 * 1. In subclass constructor, if we omit 'super', 'this' keyword no longer work
 * this is to make sure that instance of the subclass is also the instance of the parent class
 * hence super by itself is calling the parent constructor
 *
 * 2. we can overwrite the parent method, or extends it by placing
 * super inside and call the parent method
 */
