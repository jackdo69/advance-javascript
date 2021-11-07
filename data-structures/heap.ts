/**
 * Heaps are very similar to trees
 * We will looking at binary heaps
 * Heaps have some difference characteristics
 * MaxBinary heaps are heap where all the child nodes
 * are smaller than the parents, minbinary heaps are
 * opposite
 * Both of the children will be filled (left and right)
 * before go to next level
 *
 * One interesting part of the binary heap is that
 * the values can be represented as an array
 * if the parent located at index n
 * then its children (left and right) will be
 * 2n + 1 and 2n + 2
 * if from a child, to find the parent => Math.floor((index - 1) / 2)
 * Assume we have a binary heap as followed
 *                  15
 *                /   \
 *              12     10
 *           /   \    /  \
 *        11      7   8    6
 * its values will be represented as [15, 12, 10, 11, 7, 8, 6]
 */

class MaxBinaryHeap {
  values: Array<number>;
  constructor() {
    this.values = [];
  }
  print() {
    console.log(this.values);
  }
  swap(i: number, j: number) {
    let temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }

  //Given a value and an index, it will keep moving up until
  //that value stand in correct spot
  bubleUp(val: number, index: number) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.values[parentIndex] < this.values[index]) {
      if (parentIndex <= 0) {
        this.swap(0, index);
        return;
      }
      this.swap(parentIndex, index);
      this.bubleUp(val, parentIndex);
    }
    if (this.values[parentIndex] > this.values[index]) return;
  }

  //given a value and an index, it will keep moving down
  //until that value stand in the right spot
  sinkDown(val: number, index: number) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    if (leftChildIndex > this.values.length - 1) return;
    if (rightChildIndex === this.values.length - 1) {
      if (val < this.values[rightChildIndex]) {
        this.swap(index, rightChildIndex);
        return;
      }
      return;
    }
    let leftChild = this.values[leftChildIndex];
    let rightChild = this.values[rightChildIndex];
    switch (true) {
      case leftChild > val && rightChild > val:
        let largest = Math.max(leftChild, rightChild);
        let largestIndex = this.values.indexOf(largest);
        this.swap(index, largestIndex);
        return this.sinkDown(val, largestIndex);

      case rightChild > val:
        this.swap(index, rightChildIndex);
        return this.sinkDown(val, rightChildIndex);

      case leftChild > val:
        this.swap(index, leftChildIndex);
        return this.sinkDown(val, leftChildIndex);

      default:
        return;
    }
  }

  insert(value: number) {
    if (this.values.indexOf(value) !== -1) return;
    this.values.push(value);
    let index = this.values.length - 1;
    this.bubleUp(value, index);
  }

  //Extract max in MaxBinaryHeap
  removeRoot() {
    this.swap(0, this.values.length - 1);
    let oldRoot = this.values.pop();
    this.sinkDown(this.values[0], 0);
    return oldRoot;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.removeRoot();
heap.removeRoot();

heap.print();

export default {};
