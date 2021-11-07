import { nodeI } from './interfaces';
class Node {
  val: string | number;
  next: nodeI;
  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  private head: nodeI;
  private tail: nodeI;
  private length: number;
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

  // push item to the end
  push(val: string) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //pop item from the end
  pop() {
    if (!this.head) return undefined;
    let end = this.head;
    let temp: nodeI;
    while (end.next) {
      temp = end;
      end = end.next;
    }
    this.tail = temp;
    this.tail.next = null;
    this.length--;
    return end;
  }

  shift() {
    if (!this.head) return undefined;
    let result = this.head;
    this.head = result.next;
    this.length--;
    return result;
  }

  unshift(val: string) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      this.head = node;
      this.head.next = temp;
    }
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let result = this.head;
    for (let i = 0; i < index; i++) {
      result = result.next;
    }
    return result;
  }

  set(index: number, val: string) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index: number, val: string) {
    switch (true) {
      case index < 0 || index > this.length:
        return false;
      case index === this.length:
        this.push(val);
        this.length++;
        break;
      case index === 0:
        this.unshift(val);
        this.length++;
        break;

      default:
        const node = new Node(val);
        const before = this.get(index - 1);
        node.next = before.next;
        before.next = node;
        this.length++;
    }
  }

  remove(index: number) {
    switch (true) {
      case index < 0 || index > this.length - 1:
        return undefined;

      case index === this.length:
        this.pop();
        break;

      case index === 0:
        this.shift();
        break;

      default:
        const before = this.get(index - 1);
        const result = before.next;
        const after = result.next;
        before.next = after;
        this.length--;
        return result;
    }
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next: nodeI;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }
}

const list = new SinglyLinkedList();
list.push('Hi');
list.push('My');
list.push('Name');
list.push('Is');
list.push('Jack');
list.reverse();
list.traverse();

export { Node };
