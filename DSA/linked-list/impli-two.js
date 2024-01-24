class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let cur = this.head;
    let newTail = cur;
    while (cur.next !== null) {
      newTail = cur;
      cur = cur.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;

    if (this.length) {
      this.head = null;
      this.tail = null;
    }
    return cur;
  }

  shift() {
    if (!this.head) return undefined;
    let cur = this.head;
    this.head = cur.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return cur;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.head;
  }

  get(index) {
    if (index < 0 || index >= this.length) return -1;
    let count = 0;
    let current = this.head;

    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.pop(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prevNode = this.get(index - 1);
    let remove = prevNode.next;
    prevNode.next = remove.next;
    this.length--;
    return remove;
  }
}
