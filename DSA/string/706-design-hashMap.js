class MyHashMap {
  #obj = {};
  put(key, value) {
    this.#obj[key] = value;
  }
  get(key) {
    return this.#obj[key] ?? -1;
  }
  remove(key) {
    if (this.#obj[key]) delete this.#obj[key];
  }
}

let hasmap = new MyHashMap();
console.log(hasmap.remove(2));
console.log(hasmap.put(2, 5));
console.log(hasmap.put(11, 0));
console.log(hasmap.get(11));
