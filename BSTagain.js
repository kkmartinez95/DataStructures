class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;

      while (true) {
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
        } else if (value < currentNode.value) {
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

    while (currentNode && !found) {
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
    if (found === false) {
      return "NOT FOUND!!";
    } else {
      return console.log(
        `The value ${currentNode.value} is found in the tree!`
      );
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

let tree = new BST();
tree.insert(98);
tree.insert(5);
tree.insert(88);
tree.insert(188);
tree.insert(1);
// tree.insert(1);

// tree.find(5);
// tree.find(980);

console.log(tree);
