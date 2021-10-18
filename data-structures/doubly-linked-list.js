class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    let temp = this.head;
    console.log(temp.val);
    while (temp.next) {
      temp = temp.next;
      console.log(temp.val);
    }
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const previousTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = previousTail.prev;
      this.tail.next = null;
      previousTail.prev = null;
    }
    this.length--;
    return previousTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.lengh - 1) return null;
    const middle = Math.floor(this.length / 2);
    let result;
    if (index <= middle) {
      result = this.head;
      for (let i = 0; i < index; i++) {
        result = result.next;
      }
    } else {
      result = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        result = result.prev;
      }
    }
    return result;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    switch (true) {
      case index < 0 || index >= this.length:
        return false;

      case index === 0:
        this.unshift(val);
        return true;
      case index === this.length - 1:
        this.push(val);
        return true;

      default:
        const before = this.get(index - 1);
        const after = before.next;
        const node = new Node(val);
        before.next = node;
        after.prev = node;
        node.prev = before;
        node.next = after;
        this.length++;
        return true;
    }
  }

  remove(index) {
    switch (true) {
      case index < 0 || index >= this.length:
        return undefined;

      case index === 0:
        this.shift();
        break;

      case index === this.length - 1:
        this.pop();
        break;

      default:
        const node = this.get(index);
        const before = node.prev;
        const after = node.next;
        before.next = after;
        after.prev = before;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }
  }
}

const list = new DoublyLinkedList();
list.push('Hi');
list.push('there');
list.push('How');
list.push('are');
list.push('you');
list.remove(0);
list.traverse();
