/**
 * Binary Search Tree(BST) is a binary tree (1 node will have no more
 * than 2 children node)
 * the left node will always less than its parent
 * whereas the right node is greater than or
 * equal to its parent
 * This character makes it become a
 * sorted data structure, therefore much easier
 * and faster to search
 */
import { nodeTreeI } from './interfaces';

class Node {
  val: number;
  left: nodeTreeI;
  right: nodeTreeI;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  private root: nodeTreeI;
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  insert(val: number) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      function travel(val: number, node: nodeTreeI) {
        if (val === node.val) return undefined;
        if (val < node.val) {
          if (node.left) {
            travel(val, node.left);
          } else {
            node.left = newNode;
            return;
          }
        } else {
          if (node.right) {
            travel(val, node.right);
          } else {
            node.right = newNode;
            return;
          }
        }
      }
      travel(val, this.root);
    }
  }

  search(val: number) {
    switch (true) {
      case !this.root:
        return false;

      case this.root.val === val:
        return true;

      default:
        let current = this.root;
        while (current) {
          if (val === current.val) return true;
          if (val < current.val) {
            if (!current.left) return false;
            current = current.left;
          }
          if (val > current.val) {
            if (!current.right) return false;
            current = current.right;
          }
        }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(14);
tree.insert(3);
tree.insert(17);

export default BinarySearchTree;
