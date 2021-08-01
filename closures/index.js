/**
 * When a function return, all its variable will be free
 * in this case, when fn() executed and return, the 'name'
 * variable will be freed, but the inner function still
 * got access to it, because, a function will always
 * have access to the variable of the outer function, so we can still get 'name'
 */
function fn() {
  const name = "James Bond";
  console.log("Outer function called");
  return function () {
    console.log("Inner function called");
    console.log(name);
  };
}
fn()();
