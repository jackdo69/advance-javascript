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
  constructor() {
    this.values = [];
  }
  print() {
    console.log(this.values);
  }
  swap(i, j) {
    let temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }
  insert(value) {
    if (this.values.indexOf(value) !== -1) return;
    this.values.push(value);
    let index = this.values.length - 1;
    function helper(val, index, _this) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (_this.values[parentIndex] < _this.values[index]) {
        if (parentIndex <= 0) {
          _this.swap(0, index);
          return;
        }
        _this.swap(parentIndex, index);
        helper(val, parentIndex, _this);
      }
      if (_this.values[parentIndex] > _this.values[index]) return;
    }
    helper(value, index, this);
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
heap.print();
