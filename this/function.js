/**
 * From the example below, we can see that, when we put
 * 'this' inside a function, and nomatter how that function is called
 * by itself, or inside an object, the 'this' inside normal function always
 * yell the 'Global' object in Node, and 'Window' object on browser
 */

function fn() {
  console.log("Inside function");
  console.log(this);
}

const obj = {
  do() {
    console.log("Inside object");
    console.log(this);
    fn();
  },
};

// fn();
console.log("**************************");
// obj.do();

const obj2 = {
  foo() {
    console.log("Foo function called");
  },
  baz1() {
    setTimeout(function () {
      this.foo(); // this.foo is not a function
    }, 100);
  },
  baz2() {
    const self = this;
    setTimeout(function () {
      self.foo();
    }, 100);
  },
  baz3() {
    setTimeout(() => {
      this.foo();
    }, 100);
  },
};

// obj2.baz1(); // this.foo is not a function
// obj2.baz2(); // Foo function called
// obj2.baz3(); // Foo function called

/**
 * setTimeout() was declared in Global object, so this inside it belong to the global object
 * in baz2, we have to appoint the ref of 'this' in outside function to 'self' so we can access it
 * in baz3, arrow function always apply this the same as the environment around it (lexical scope)
 */
