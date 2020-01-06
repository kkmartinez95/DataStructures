/* Udemy Masterclass

VIDEO #7 Our Tree Classes

*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

class Node {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(15);
tree.root.right = new Node(20);
tree.root.left = new Node(10);
tree.root.left.right = new Node(13);

console.log("TREE >>>>", tree);
