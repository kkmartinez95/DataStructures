/*
A queue is a data structure that stores pieces of data and returns them in the same order in which they were inserted. One way of implementing them is as a linked list. A priority queue is a data structure that takes a priority value with each piece of data and returns the data in order of priority.

Interviewer Prompt
Implement a priority queue with the following 3 methods:
insert(data, priority) // inserts data into the priority queue with the given priority
peek() // returns the value of the item with the highest priority without removing it from the priority queue
popMax() // returns the value of the item with the highest priority and also removes it from the priority queue
For the purposes of our implementation, "higher priority" corresponds to a higher integer value. Note, however, that this could be implemented either way.



Example Output
A hospital emergency room could use a priority queue to determine the order in which their doctors see patients. The priority queue would work the following way:

const pq = new PriorityQueue();
pq.insert('Jill, concussion', 7);
pq.insert('John, stomach pain', 5);
pq.peek() // ==> 'Jill, concussion'
pq.peek() // ==> 'Jill, concussion'  // Jill is still in the PQ
pq.insert('Dave, sprained ankle', 1);
pq.insert('Bob, breathing problems', 8)
pq.peek() // ==> 'Bob, breathing problems'
pq.popMax() // ==> 'Bob, breathing problems'
pq.peek() // ==> 'Jill, concussion' // Bob has been removed from the PQ
*/

// creat node class

class Node {
  constructor(data, priorityLevel) {
    this.data = data;
    this.priorityLevel = priorityLevel;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.first = null;
  }

  insert(data, priorityLevel) {
    let newItem = new Node(data, priorityLevel);

    if (!this.first || this.first.priorityLevel < priorityLevel) {
      // First case: Check if the PQ is empty, or newItem's priority > this.first's
      newItem.next = this.first;
      this.first = newItem; // New Node (newItem) becomes new first
    } else {
      // Second case: Find where to insert newItem
      let currentNode = this.first;
      while (
        currentNode.next &&
        currentNode.next.priorityLevel >= priorityLevel // loops through `n` amount of times in the worst case
      ) {
        // Traverse queue until it finds a node with priority < search priority
        currentNode = currentNode.next;
      }
      // Here, currentNode is right before where you want to insert newItem. Point
      // newItem.next to currentNode.next, then point currentNode's next to newItem.
      newItem.next = currentNode.next;
      currentNode.next = newItem;
    }
  }
  peek() {
    return console.log("PEEK HERE!", this.first.data);
  }
  popMax() {
    const maxVal = this.first; // "BILLY, CORONA", 100
    this.first = this.first.next; // "Jill, concussion", 7 ==> IS NOW THE FIRST ON QUEUE
    return maxVal.data; // "BILLY, CORONA", 100
  }
}

let q = new PriorityQueue();

q.insert("Jill, concussion", 7);
q.insert("John, stomach pain", 5);
q.insert("BILLY, CORONA", 100);

q.peek();
q.popMax();

console.log(q);

/*
Complexity
This should be O(1) time complexity for peek and popMax, but O(n) time complexity for insert (where n is the number of nodes in the priority queue).
Space complexity is O(n), where n is the number of items in the queue.
*/

// ~~~~~~~~~~~ OPTOMIZATION WITH HEAPS ~~~~~~~~~~~~~~~~~~

class HeapPQ {
  constructor() {
    this.items = [];
  }

  swap(childIdx, parentIdx) {
    [this.items[childIdx], this.items[parentIdx]] = [
      this.items[parentIdx],
      this.items[childIdx]
    ];
  }

  parentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  childrenIndices(parentIdx) {
    return [parentIdx * 2 + 1, parentIdx * 2 + 2];
  }

  priority(i) {
    return this.items[i].priority;
  }

  insert(data, priority) {
    this.items.push({ data, priority });
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIdx = this.items.length - 1;
    while (
      currentIdx > 0 &&
      this.items[currentIdx].priority >
        this.items[this.parentIdx(currentIdx)].priority
    ) {
      this.swap(currentIdx, this.parentIdx(currentIdx));
      currentIdx = this.parentIdx(currentIdx);
    }
  }

  peek() {
    return this.items[0].data;
  }

  popMax() {
    const max = this.items[0];

    // replace the root with the last item in the collection
    this.items[0] = this.items.pop();

    this.heapifyDown();
    return max.data;
  }

  heapifyDown() {
    let currentIdx = 0;
    let [left, right] = this.childrenIndices(currentIdx);
    let idxLarger;
    const length = this.items.length;
    while (left < length) {
      if (right < length) {
        idxLarger = this.priority(left) >= this.priority(right) ? left : right;
      } else idxLarger = left;

      if (this.priority(currentIdx) < this.priority(idxLarger)) {
        this.swap(idxLarger, currentIdx);
        currentIdx = idxLarger;
        [left, right] = this.childrenIndices(currentIdx);
      } else return;
    }
  }
}
