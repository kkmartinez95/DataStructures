// SINGLY LINKED LIST

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }

    return currentNode;
  }

  shift() {
    // removes the first node
    if (!this.head) return undefined;
    let oldHead = this.head;

    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) {
      this.head = this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = oldHead;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  set(value, index) {
    let foundNode = this.get(index);

    if (!foundNode) {
      return false;
    } else {
      foundNode.value = value;
      return true;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;

    if (prevNode) {
      prevNode.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let foundNode = this.get(index - 1);
    let newNext = this.get(index + 1);
    foundNode.next = newNext;
    this.length--;
    return this.get(index);
  }
}

let list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
list.push("fourth");

// list.pop();
// list.pop();
// list.pop();

// list.shift();
// list.shift();
// list.shift();
// list.shift();
// list.unshift("poop");

// list.get(0);
// list.get(2);

// list.set("newInput", 3);
// list.insert(1, "im inserted!");
list.remove(2);

console.log(list.head.next);
// const firstNode = new Node("hi");
// firstNode.next = new Node(" there");
// firstNode.next.next = new Node(" buddy!");

// console.log(firstNode);
