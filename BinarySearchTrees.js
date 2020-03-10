/* Udemy Masterclass

VIDEO #7 Our Tree Classes

*/

/* VIDEO #8 & #9 INSERT  --> look at line ___34___ for solution!!

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

/* VIDEO #10 & #11 FIND  --> look at line ___84___ for solution!!

How to find a node (PSUDOCODE):

--> Starting at the root
    --> Check if there is a root, if not - we're done searching!
    --> If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
    --> If not, check to see if the value is greater than or less than the value of the root
    --> If it is greater
        + Check to see if there is a node to the right
            + If there is, move to that node and repeat these steps
            + If there is not, we're done searching!
    --> If it is less
        + Check to see if there is a node to the left
            + If there is, move to that node and repeat these steps
            + If there is not, we're done searching!

Tree Traversal:

        10
    6       15
3     8         20


--> 1. Breadth-first :  Prints => [10, 6, 15, 3, 8, 20]
        + Create a queue, and a vaiable to store the vals of nodes visited
        + Place the root node in the queue
        + Loop as long as there is anything in the queue
            + Dequeue a node from the queue (shift) and push the val of the node into the variable that stores the nodes
            + If there is a left property on the node dequeued - add it to the queue
            + If there is a right property on the node dequeued - add it to the queue
        + Return the variable that stores the values

--> 2. Depth-first: Prints => [10, 6, 3, 8, 15, 20]
        + Create a variable to store the values of nodes visited
        + Store the root of the BST in a variable called current
        + Write a helper function which accepts a node
            + Push the value of the node to the variable that stores the values
            + If the node has a left property, call the helper func with the left property of the node
            + If the node has a right property, call the helper func with the right property on the node
        + Invoke the helper func with the current variable
        + return the array of values
*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    let currentNode = this.root;

    if (!this.root) {
      this.root = newNode;
    } else {
      while (currentNode.next !== null) {
        if (currentNode.value === value) {
          return console.log(`The value ${value} is already in the tree!`);
        }

        if (value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }

        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }
  }

  find(value) {
    let currentNode = this.root;
    let found = false;

    if (!currentNode) return console.log("EMPTY TREE");

    // if (currentNode.value === value) {
    //   return console.log(
    //     `The value ${currentNode.value} is found in the tree!`
    //   );
    // } else {
    while (currentNode.next !== null && !found) {
      if (currentNode.value === value) {
        found = true;
        break;
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
    }
    // }

    return console.log(`The value ${currentNode.value} is found in the tree!`);
  }

  bfs() {
    let queue = [];
    let visited = [];
    let currentNode = this.root;

    queue.push(currentNode); // pushes current node

    while (queue.length) {
      currentNode = queue.shift(); // reassigns the currentNode to be the first element in the queue
      visited.push(currentNode.value); // push the value of the currentNode in the returning array.

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return visited, console.log("VISITED", visited);
  }

  dfsPreOrder() {
    let results = [];
    let current = this.root;

    function helper(node) {
      results.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }

    helper(current);

    return results, console.log("HIIIII", results);
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
tree.insert(99);
tree.insert(109);
tree.insert(50);
tree.insert(9);
tree.insert(1);
// tree.insert(99);

// tree.find(1);
// tree.find(99);
tree.bfs();
tree.dfsPreOrder();

console.log("TREE >>>>", tree);
