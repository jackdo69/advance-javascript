data = {
  john: "This is John data",
  lily: "this is Lily data",
};

function delay(seconds) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + seconds * 1000) {}
}

function Server() {
  this.getData = function (query) {
    return new Promise(function (resolve, reject) {
      delay(1);
      if (Object.keys(data).indexOf(query) !== -1) {
        resolve(data[query]);
      } else {
        reject(new Error("404: Data not found!"));
      }
    });
  };
}

function Client() {
  this.server = new Server();
  this.fetch = function (query) {
    this.server
      .getData(query)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
}

const client = new Client();
client.fetch("john");
client.fetch("timmy");
client.fetch("lily");
