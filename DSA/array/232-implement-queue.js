class MyQueue {
  #queue = [];

  push(val) {
    this.#queue.unshift(val);
  }
  pop() {
    return this.#queue.pop();
  }
  peek() {
    return this.#queue[this.#queue.length - 1];
  }
  empty() {
    return this.#queue.length === 0;
  }
}
