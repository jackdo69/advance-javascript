/**
 * Tree traversal is the process
 * to go through every node of a tree
 * This is not limited to binary search tree
 * But for the demo purpose, we will use the
 * BinarySearchTree class we created
 */

// const BinarySearchTree = require('./binary-search-tree');
import BinarySearchTree from './binary-search-tree';
import { nodeTreeI } from './interfaces';

const tree = new BinarySearchTree();
tree.insert(97);
tree.insert(87);
tree.insert(103);
tree.insert(73);
tree.insert(51);
tree.insert(112);
tree.insert(91);
tree.insert(178);
tree.insert(110);
tree.insert(90);
tree.insert(92);

// The tree we form will look like
//                 97
//               /    \
//             /        \
//           87          103
//          /   \            \
//        /       \            \
//      73         91            112
//    /           /  \          /   \
//   /           /     \       /     \
// 51          90       92   110       178

function breadFirstSearch(root: nodeTreeI) {
  const queue = [];
  const results = [];
  queue.push(root);
  while (queue.length) {
    const item = queue.shift();
    results.push(item.val);
    if (item.left) queue.push(item.left);
    if (item.right) queue.push(item.right);
  }
  return results;
}

function depthFirstPreOrder(root: nodeTreeI) {
  const valuesVisited = [];
  function helper(node) {
    valuesVisited.push(node.val);
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  }
  helper(root);
  return valuesVisited;
}

function depthFirstPostOrder(root: nodeTreeI) {
  const valuesVisited = [];
  function helper(node) {
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
    valuesVisited.push(node.val);
  }
  helper(root);
  return valuesVisited;
}

function depthFirstInOrder(root: nodeTreeI) {
  const valuesVisited = [];
  function helper(node) {
    if (node.left) helper(node.left);
    valuesVisited.push(node.val);
    if (node.right) helper(node.right);
  }
  helper(root);
  return valuesVisited;
}

console.log(depthFirstPostOrder(tree.getRoot()));
