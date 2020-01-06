/* Udemy Masterclass

VIDEO #7 Our Tree Classes

*/

/* VIDEO #8 INSERT 

How to insert a node (PSUDOCODE): 

--> Create a new node
--> Starting at the root
    --> Check if there is a root, if not - the root now becomes that new node!
    --> If there IS a root, check if the value of the new node is greater than or less than the value of the root.
    --> If it is greater
        + Check to see if there is a node to the right
            + If there is, move to that node and repeat these steps
            + If there is not, add that node as the right property
    --> if it is less
        + Check to see if there is a node to the left
            + If there is, move to that node and repeat these steps
            + If there is not, add that node as the left property


*/

/* VIDEO #9 INSERT SOLUTION */ // look at line ______ for solution!!

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;

      while (currentNode !== null) {
        if (value === currentNode.value) {
          return console.log(`The value ${value} is already in this tree!`);
        }
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

class Node {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
}

var tree = new BinarySearchTree();
// tree.root = new Node(15);
// tree.root.right = new Node(20);
// tree.root.left = new Node(10);
// tree.root.left.right = new Node(13);

tree.insert(10);
tree.insert(8);
tree.insert(3);
tree.insert(55);
tree.insert(57);
tree.insert(10);

console.log("TREE >>>>", tree);
