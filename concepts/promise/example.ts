let data = {
  john: 'This is John data',
  lily: 'this is Lily data',
};

import delay from './index';

function Server() {
  this.getData = function (query: string) {
    return new Promise(function (resolve, reject) {
      delay(1);
      if (Object.keys(data).indexOf(query) !== -1) {
        resolve(data[query]);
      } else {
        reject(new Error('404: Data not found!'));
      }
    });
  };
}

function Client() {
  this.server = new Server();
  this.fetch = function (query: string) {
    this.server
      .getData(query)
      .then((data: any) => {
        console.log(data);
      })
      .catch((e: TypeError) => {
        console.log(e.message);
      });
  };
}

const client = new Client();
client.fetch('john');
client.fetch('timmy');
client.fetch('lily');
