/**
 * Init first way
 */

class Person {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
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
interface teacherT {
  type: string;
  subjects: Array<string>;
  [key: string]: any;
}
class Teacher implements teacherT {
  type = 'teacher';
  subjects: Array<string>;
  constructor(methods: Object) {
    Object.keys(methods).forEach((m) => (this[m] = methods[m]));
  }
  update(callback: (arg: Object) => void) {
    callback(this);
  }
}

const jessie = new Teacher({
  setup(...args: Array<string>) {
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
  setup(...args: Array<string>) {
    args.forEach((subject) => this.subjects.push(subject));
    this.name = 'Ben';
    this.age = 35;
    this.update((teacher: teacherT) => {
      teacher.hobby = 'Fishing';
    });
  },
  exercise(type: string) {
    console.log(`Working out ${type}`);
  },
});

const teachers = [jessie, ben];
teachers.forEach((t: teacherT) => {
  t.subjects = [];
  t.setup('Physics', 'Maths');
});

console.log(jessie);
console.log(ben);

export default {};
