class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.start = node;
      this.end = node;
    } else {
      this.end.next = node;
      this.end = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    const first = this.start;
    if (this.size === 1) {
      this.start = null;
      this.end = null;
    } else {
      this.start = first.next;
    }
    this.size--;
    first.next = null;
    return first.val;
  }
}
