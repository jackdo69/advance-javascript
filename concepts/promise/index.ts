/**
 * Keypoints
 * 1. Promise is an Object, which obviously has constructor
 * 2. It's a proxy (see proxy section in patterns for more details) for a value in the future
 * so it makes async actions becomse sync (because even the data is not there, we have a placeholder for it)
 * 3. A Promise will be in 3 states:
 * 'pending' we don't care much about this state, nothing we can do, just wait
 * 'fulfiled' operation was success
 * 'rejected' operation was failed
 * 4. Promise prototype has some method, we will look at 3 main ones (other are importants but not here)
 */

/**
 * simple sleep() function that when we place in async block will hold the execution of code
 */
const sleep = (ms: number) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
(async function () {
  //this will hold the execution for 3 seconds
  await sleep(3000);
})();

// we can achieve the above effect in normal code flow without putting inside async block
function delay(ms: number) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + ms) {}
}
delay(3000);

/**
 * then() will takes 2 arguments, which are 2 function to handle the resolve and reject cases
 * catch() only have 1 argument, which handle the reject case
 * both then() and catch() will return a new promise, which is why we can chain it
 */

// const promise = new Promise();
// promise
//   .then(resolveHandler, rejectHandler)
//   .then(resolveHandler, rejectHandler)
//   .catch(rejectHandler);

/** in then() block the action can leave consequences further down the chain, let say throw Error
 * in then() block, the rejectHandler can be omitted, which will eventually be handle by the next catch() block
 */

/**
 * the return value of each resolved promise will be passed to the next then(), whereas reason for rejection
 * will be passed to the next reject-handler
 */

const thenPromise = new Promise((resolve, reject) => {
  resolve('Success');
  //or
  //reject('Error')
});

thenPromise
  .then(
    (val) => {
      console.log(val); // Success
      return 'hello';
    },
    (reason) => {
      console.log(reason); // Error
    }
  )
  .then((val) => {
    console.log(val); // hello
  })
  .catch((e) => {
    console.log(e); //Error
  });

export = delay;
