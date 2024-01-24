// ! node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ! single Linked class
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  pop() {
    if (!this.head) return null;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let secondPrev = this.head;
      let i = this.length - 1;
      while (i > 1) {
        let current = secondPrev.next;
        secondPrev = current;
        i--;
      }
      secondPrev.next = null;
      this.tail = secondPrev;
      this.length -= 1;
    }
  }

  shift() {
    if (!this.head) return null;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let nextNode = this.head.next;
      this.head = nextNode;
      this.length -= 1;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }
}

const list = new SingleLinkedList();
list.push(1);
list.pop();
list.unshift(3);
list.shift();

console.log(list);
