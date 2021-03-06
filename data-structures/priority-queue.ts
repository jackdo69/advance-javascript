/**
 * Priority queue is an abstract concept
 * where each item in a queue can be organized
 * by its 'priority' means which one
 * with lower 'priority' will be popout (dequeued)
 * before the one with higher 'priority'
 *
 * So in order to implement this, we based strongly on
 * Binary Heap, except that instead of comparing
 * value, we compare the 'priority'
 * So instead of numbers, we create a node class
 * with 'priority' and 'value' and use 'priority'
 * to compare.
 * We also create a MinBinaryHeap (instead of MaxBinaryHeap like
 * before)
 */
import { nodePriorityI } from './interfaces';

class Node {
  val: string;
  priority: number;
  constructor(val: string, priority: number) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  values: Array<nodePriorityI>;
  constructor() {
    this.values = [];
  }
  enqueue(val: string, priority: number) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild: nodePriorityI, rightChild: nodePriorityI;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const queue = new PriorityQueue();
queue.enqueue('Alex', 5);
queue.enqueue('James', 1);
queue.enqueue('Bella', 4);
queue.enqueue('Jessie', 2);
queue.enqueue('Tom', 3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

export default PriorityQueue;
