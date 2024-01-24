class Stack {
  #MAX = 10;
  #stack_array = Array.from(this.#MAX);
  #top = -1;

  isEmpty() {
    return this.#top === -1;
  }

  isFull() {
    return this.#top === this.#MAX - 1;
  }

  push(val) {
    if (this.isFull()) {
      console.log("Stack Overflow");
      return;
    }
    this.#top += 1;
    this.#stack_array[this.#top] = val;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return;
    }
    this.#top -= 1;
    return this.#stack_array.pop();
  }

  top() {
    if (this.isEmpty()) return "Stack is empty";
    return this.#stack_array[this.#top];
  }

  print() {
    let count = 0;
    if (!this.isEmpty()) {
      for (let val of this.#stack_array) {
        console.log(val, count);
        count++;
      }
    } else console.log("Stack is Empty");
  }
}

const stack = new Stack();
stack.push(41);
stack.push(42);
stack.push(43);
stack.push(44);
stack.push(45);
stack.push(46);
stack.push(47);
stack.push(48);
stack.push(49);
stack.push(50);
stack.push(51);
console.log(stack.isFull());
console.log(stack.pop());
stack.print();

console.log([].pop());
