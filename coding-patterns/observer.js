function Observer(name) {
  this.name = name;
  this.update = function () {
    console.log(`${this.name} was notified!`);
  };
}

function ObserverList() {
  this.list = [];
  this.addObserver = function (ob) {
    this.list.push(ob);
  };
  this.removeObserver = function (ob) {
    for (let i = 0; i < this.list.length; i++) {
      if (ob.name === this.list[i].name) {
        this.list.splice(i, 1);
      }
    }
  };
  this.notifyObservers = function () {
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].update();
    }
  };
}

function Subject() {
  this.observerList = new ObserverList();
  this.addObserver = function (...args) {
    for (let i = 0; i < args.length; i++) {
      this.observerList.addObserver(args[i]);
    }
  };
  this.removeObserver = function (ob) {
    this.observerList.removeObserver(ob);
  };
  this.changes = function () {
    console.log("Subject is changing!!");
    this.observerList.notifyObservers();
  };
}

const ob1 = new Observer("alex");
const ob2 = new Observer("jessica");
const ob3 = new Observer("billy");
const subject = new Subject();
subject.addObserver(ob1, ob2, ob3);
subject.changes();
subject.removeObserver(ob2);
subject.removeObserver(ob3);
subject.changes();
