/**
 * Tree traversal is the process
 * to go through every node of a tree
 * This is not limited to binary search tree
 * But for the demo purpose, we will use the
 * BinarySearchTree class we created
 */

const BinarySearchTree = require('./binary-search-tree');

const tree = new BinarySearchTree();
tree.insert(12);
tree.insert(3);
tree.insert(7);
tree.insert(24);
tree.insert(17);
tree.insert(1);
tree.insert(35);

// The tree we form will look like
//          12
//        /    \
//       3       24
//     /   \    /  \
//    1     7  17   35
//

function breadFirstSearch(root) {
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

console.log(breadFirstSearch(tree.root));
