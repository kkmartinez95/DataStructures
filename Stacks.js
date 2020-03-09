class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(value) {
    let newItem = new Node(value);
    if (!this.first) {
      this.first = this.last = newItem;
      this.length++;
    } else {
      let current = this.first;
      this.first = newItem;
      newItem.next = current;
      this.length++;
    }
    return this.length;
  }

  pop() {
    if (!this.first) {
      return null;
    } else {
      let firstOut = this.first;

      if (this.length === 1) {
        this.first = this.last = null;
      } else {
        this.first = firstOut.next;
      }
    }
    this.length--;
    return this.length;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let stack = new Stack();

stack.push("first");
stack.push("second");
stack.push("third");

stack.pop();
stack.pop();
stack.pop();

console.log(stack);
