/* 
January 9th, 2020

DOUBLY LINKED LISTS WORKSHOP

*/

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null; // this is the property that makes it DOUBLY LINKED.
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.length++;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    let oldTail = this.tail.value;

    if (this.tail) {
      if (this.length === 1) {
        this.tail = null;
        this.head = null;
        this.length = 0;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
      }
      return console.log("POPPED OFF", oldTail, this);
    }
  }

  shift() {
    // removes the first element from an array and returns that removed element. This method changes the length of the array.
    let oldHead = this.head.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      this.length = 0;
      console.log("MEEP", oldHead);
    } else if (this.head) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return oldHead;
    } else {
      return console.log("NOTHING TO SHIFT");
    }
  }

  unshift(value) {
    // method adds one or more elements to the beginning of an array and returns the new length of the array.

    const newHead = new Node(value);
    let oldHead = this.head;

    this.head.prev = newHead;
    newHead.next = oldHead;
    this.head = newHead;
    this.length++;
    return "UNSHIFTED", this.length;
  }

  insertAtIndex(index, value) {
    // insert val after the nth node, return this
    const newNode = new Node(value);
    let currentNode = this.head;
    let count = 0;

    while (count <= index && currentNode.next) {
      count++;
      currentNode = currentNode.next;
    }
    if (index === 0) {
      this.unshift(value);
    } else {
      let prevNode = currentNode.prev;
      newNode.prev = prevNode;
      newNode.next = currentNode;
      prevNode.next = newNode;
      currentNode.prev = newNode;
      this.length++;
    }
    return this;
  }

  // pop() {
  //   let tailVal = this.tail.value;

  //   if (this.tail) {
  //     if (this.length === 1) {
  //       this.head = this.tail = null;
  //       this.length = 0;
  //     } else {
  //       this.tail = this.tail.prev;
  //       this.tail.next = null;
  //     }

  //     this.length--;
  //     return console.log("POPPED", tailVal);
  //   } else {
  //     return false;
  //   }
  // }

  // shift() {
  //   // removes the first element from an array and returns that removed element. This method changes the length of the array.
  //   let headVal = this.head.value;
  //   if (this.head === this.tail) {
  //     this.tail = this.head = null;
  //     this.length = 0;
  //   } else if (this.length) {
  //     this.length--;
  //     this.head = this.head.next;
  //     this.head.prev = null;
  //   } else {
  //     return undefined;
  //   }
  //   return console.log("REMOVED THIS VAL", headVal);
  // }

  // unshift(value) {
  //   // method adds one or more elements to the beginning of an array and returns the new length of the array.
  //   let newHead = new Node(value);

  //   if (!this.head) {
  //     this.head = this.tail = newHead;
  //     this.length++;
  //   } else {
  //     this.head.prev = newHead;
  //     newHead.next = this.head;
  //     this.head = newHead;
  //     this.length++;
  //   }

  //   return console.log(this.length);
  // }

  // insertAtIndex(index, value) {
  //   // insert val after the nth node, return this
  //   let newNode = new Node(value);
  //   let count = 0;
  //   let currentNode = this.head;

  //   while (count < index && currentNode.next) {
  //     count++;
  //     currentNode = currentNode.next;
  //   }

  //   if (index === 0) {
  //     this.unshift(value);
  //   } else {
  //     let prevNode = currentNode.prev;
  //     newNode.prev = prevNode;
  //     newNode.next = currentNode;
  //     prevNode.next = newNode;
  //     currentNode.prev = newNode;
  //     this.length++;
  //   }
  //   return this;
  // }
  // removeAtIndex() {}
  // getIndex() {}
  // setIndex() {}
  // search() {}
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
// list.push(4);
// list.pop();
// list.pop();
// list.pop();
// list.pop();

// list.shift();
// list.shift();
// list.shift();
// list.unshift(78);
list.insertAtIndex(2, 99);

console.log("LIST HERE", list);
