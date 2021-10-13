/**
 * Mediator is the upgraded of observer pattern
 * where instead of a straight bind between components/modules
 * we have a center mediator (similar to a store in react/vue app)
 * and we can decouple the link between components
 */

function Participant(name) {
  this.name = name;
  this.chatroom = null;

  this.send = function (message, to) {
    this.chatroom.sendMessage(message, this, to);
  };
  this.receive = function (message, from) {
    console.log(`${this.name} is receiving from ${from.name}: ${message}`);
  };
}

function Chatroom() {
  this.participants = {};

  this.register = function (...args) {
    for (let i = 0; i < args.length; i++) {
      let p = args[i];
      this.participants[p.name] = p;
      p.chatroom = this;
    }
  };

  this.unregister = function (p) {
    delete this.participants[p.name];
    p.chatroom = null;
  };

  this.sendMessage = function (...args) {
    const message = args[0];
    const from = args[1];
    const to = args[2];
    if (to) {
      // Send message to a specific participant
      this.participants[to.name].receive(message, from);
    } else {
      // Publish to whole chatroom
      for (k in this.participants) {
        if (k !== from.name) {
          this.participants[k].receive(message, from);
        }
      }
    }
  };

  this.showParticipants = function () {
    const list = Object.keys(this.participants).join(", ");
    console.log(`The chatroom currently have: ${list}`);
  };
}

const john = new Participant("John");
const laura = new Participant("Laura");
const tom = new Participant("Tom");
const kate = new Participant("Kate");
const chatroom = new Chatroom();
chatroom.register(john, laura, tom, kate);
chatroom.showParticipants();
john.send("Hello everyone");
laura.send("Hi John", john);
kate.send("Let's go out tonight", tom);
chatroom.unregister(kate);
chatroom.showParticipants();
