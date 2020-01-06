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
