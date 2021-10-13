/**
 * Singleton is useful when we want to create an object and
 * share its context globally
 * typical usecases of Singleton includes (but not limited to):
 * Database connection, memory cache, log system..,etc.
 */

const CorrectSingleton = (function () {
  let instance;

  function init() {
    instance = {};
    instance.random = Math.random().toFixed(12);
  }

  function getInstance() {
    if (!instance) {
      init();
    }
    return instance;
  }

  return { getInstance };
})();

const InCorrectSingleton = (function () {
  let instance;
  function init() {
    instance = {};
    instance.random = Math.random().toFixed(12);
  }

  function getInstance() {
    init();
    return instance;
  }

  return { getInstance };
})();

const ins1 = CorrectSingleton.getInstance();
const ins2 = CorrectSingleton.getInstance();
const ins3 = InCorrectSingleton.getInstance();
const ins4 = InCorrectSingleton.getInstance();
console.log(ins1.random);
console.log(ins2.random);
console.log(ins3.random);
console.log(ins4.random);
