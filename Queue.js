// QUEUE => FIFO : `First In First Out`

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    // adds nodes to the end of queue
    let newNode = new Node(value);

    if (!this.first) {
      this.first = this.last = newNode;
      this.length++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }
  }

  unshift() {
    // removes first node from queue (FIFO)

    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.first = this.last = null;
      this.length = 0;
      return this;
    }

    let offTheQ = this.first.value;
    this.first = this.first.next;
    this.length--;

    return console.log("this was removed from queue", offTheQ);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let q = new Queue();

q.push("One");
q.push("Two");
q.push("Three");
q.unshift();
q.unshift();
q.unshift();

console.log(q);
