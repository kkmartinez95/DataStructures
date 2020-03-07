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
tree.insert(99);

tree.find(1);
tree.find(99);

console.log("TREE >>>>", tree);

// insert(value) {
//     let newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     } else {
//       let currentNode = this.root;

//       while (currentNode !== null) {
//         if (value === currentNode.value) {
//           return console.log(`The value ${value} is already in this tree!`);
//         }
//         if (value < currentNode.value) {
//           if (currentNode.left === null) {
//             currentNode.left = newNode;
//             return this;
//           }
//           currentNode = currentNode.left;
//         } else if (value > currentNode.value) {
//           if (currentNode.right === null) {
//             currentNode.right = newNode;
//             return this;
//           }
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }

// find(value) {
//   if (this.root === null) return false;

//   let current = this.root;
//   let found = false;

//   while (current && !found) {
//     if (value < current.value) {
//       current = current.left;
//     } else if (value > current.value) {
//       current = current.right;
//     } else {
//       found = true;
//     }
//   }
//   return console.log(`THIS IS THE FOUND VALUE! ${current.value}`);
// }
