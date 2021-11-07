import { nodeI } from './interfaces';
class Node {
  val: number;
  next: nodeI;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  start: nodeI;
  end: nodeI;
  size: number;
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  push(val: number) {
    const node = new Node(val);
    if (this.size === 0) {
      this.start = node;
      this.end = node;
    } else {
      let temp = this.start;
      this.start = node;
      this.start.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    const node = this.start;
    if (this.size === 1) {
      this.start = null;
      this.end = null;
    } else {
      const newStart = node.next;
      this.start = newStart;
      node.next = null;
    }
    this.size--;
    return node.val;
  }
}

export default {};
