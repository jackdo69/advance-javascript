/**
 * the 'proxy' word itself basically means
 * a surrogate for another object or control
 * access for another object
 * this can be found very common in networking
 * here, we take a look at how proxy helps us cache
 * some API call
 */

//this function is the simulation of fetching data from DB
function fetchData(delay: number) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay * 1000) {}
}
function API() {
  const dataUsers = {
    tom: 'Tom data',
    alex: 'Alex data',
    jimmy: 'Jimmy data',
    bella: 'Bella data',
    christine: 'Christine data',
  };

  this.get = function (user: string) {
    fetchData(3);
    return dataUsers[user];
  };
}

function ProxyAPI() {
  let cache = {};
  const api = new API();
  this.fetchUser = function (user: string) {
    if (!cache[user]) {
      cache[user] = api.get(user);
      console.log('Actual call to the Server');
    }
    return cache[user];
  };
}
const proxy = new ProxyAPI();
const start = new Date().getTime();
proxy.fetchUser('jimmy');
proxy.fetchUser('jimmy');
proxy.fetchUser('bella');
proxy.fetchUser('tom');
proxy.fetchUser('tom');
const timeTotal = ((new Date().getTime() - start) / 1000).toFixed(2);
console.log(`It takes ${timeTotal} seconds`);

/**
 * each api call takes 3 seconds to fetchData, we make 5 calls but takes
 * only 9 seconds because 2 calls have been cached
 */
