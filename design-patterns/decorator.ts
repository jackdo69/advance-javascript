/**
 * decorator is the design pattern where we want to
 * add extra logic to a class, method, function, object, ...
 * on runtime without changing its logic
 *
 * Multiple decorator can be applied to a declaration
 */
import 'reflect-metadata';

function ClassDeco(options: { type: string }) {
  return (target: Function & typeof Animal) => {
    // target: the constructor Function
    target.branch = options.type;
  };
}

function MethodDeco(input: string) {
  return function (
    target: any, // target: the prototype of the class for instance member OR the constructor function for static member
    propertyKey: string, // the name of the method
    descriptor: PropertyDescriptor // with the 'value' property represent the actual function
  ) {
    target.extraProperty = () => {
      console.log('I was added to the prototype by Method deco');
    };
    console.log('MethodDeco target', target);
    console.log('MethodDeco propertyKey', propertyKey);
    descriptor.value = function (...args) {
      console.log(`Method deco ${args} ${input}`);
    };
  };
}

function AccessorDeco() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('AccessorDeco target', target);
    console.log('AccessorDeco descriptor', descriptor);
  };
}

class Animal {
  static branch: string;
  id: number;
  run: () => void;
  sing: () => void;

  constructor() {
    this.id = 12;
  }
  sleep() {
    console.log('Sleeping..');
  }
}

Animal.prototype.sing = () => {
  console.log('animal singing ..');
};

@ClassDeco({ type: 'Bird' })
class Bird extends Animal {
  private _color: string;
  walk: () => void;
  constructor() {
    super();
    this._color = 'blue';
    this.walk = () => {
      console.log('walking');
    };
  }

  @AccessorDeco()
  get color() {
    return this._color;
  }

  @MethodDeco('I am method deco input')
  sayHello(input: string = '') {}
}

Bird.prototype.sing = () => {
  console.log('Altered prototype');
};

@ClassDeco({ type: 'Dog' })
class Dog extends Animal {}

export default {};
