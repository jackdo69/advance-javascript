/**
 * Instead of putting multiple function into object
 * as its method, and when we call that function
 * we have to rely on that object
 * we can use command pattern to decouple the bound to the object
 * itself
 */

const oldWay = (function () {
  const obj = {
    greet: function (name: string) {
      console.log('Hello', name);
    },
    sleep: function (name: string) {
      console.log(name, ' is sleeping');
    },
  };
  return obj;
})();

oldWay.greet('jessy');

const command = (function () {
  const obj = {
    greet: function (name: string) {
      console.log('Hello', name);
    },
    sleep: function (name: string) {
      console.log(name, ' is sleeping');
    },
  };
  function exec(...args: [keyof typeof obj, string]) {
    const name = args[0];
    obj[name].apply(obj, [].slice.call(args, 1)); //the reason slice works in this example is because slice does not have to take an array, it can be anything that has .length property
  }
  return exec;
})();

command('greet', 'Tom');
