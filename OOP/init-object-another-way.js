/**
 * Init first way
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayMyname() {
    console.log(`My name is ${this.name}`);
  }
}

const peter = new Person('Peter', 14);
peter.sayMyname();

/**
 * Init second way
 */

class Teacher {
  constructor(methods) {
    Object.keys(methods).forEach((m) => (this[m] = methods[m]));
    this.type = 'teacher';
  }
  update(callback) {
    callback(this);
  }
}

const jessie = new Teacher({
  setup(...args) {
    args.forEach((subject) => this.subjects.push(subject));
    this.name = 'Jessie';
    this.update((teacher) => {
      teacher.favoriteColor = 'Blue';
      teacher.shopping = function () {
        console.log('Going shopping');
      };
    });
  },
});

const ben = new Teacher({
  setup(...args) {
    args.forEach((subject) => this.subjects.push(subject));
    this.name = 'Ben';
    this.age = 35;
    this.update((teacher) => {
      teacher.hobby = 'Fishing';
    });
  },
  exercise(type) {
    console.log(`Working out ${type}`);
  },
});

const teachers = [jessie, ben];
teachers.forEach((t) => {
  t.subjects = [];
  t.setup('Physics', 'Maths');
});

console.log(jessie);
console.log(ben);
