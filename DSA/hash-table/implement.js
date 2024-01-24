const crypto = require("crypto");

class HashTable {
  constructor(size = 7) {
    this.dataTable = new Array(size);
  }

  // ! hash function
  _hash(key) {
    const hash = crypto.createHash("sha256");
    hash.update(key);
    const hashedKey = hash.digest("hex");

    let sum = 0;
    for (let i = 0; i < hashedKey.length; i++) {
      sum += hashedKey.charCodeAt(i);
    }

    return sum % this.dataTable.length;
  }

  // ! set fucntion
  set(key, value) {
    const index = this._hash(key);

    if (!this.dataTable[index]) this.dataTable[index] = [];

    this.dataTable[index].push([key, value]);
  }

  // ! get data from hash table
  get(key) {
    const index = this._hash(key);

    if (!this.dataTable[index]) return undefined;

    for (let inner of this.dataTable[index]) {
      if (inner[0] === key) return inner[1];
    }
  }

  // ! get all the keys
  keys() {
    const allKeys = [];
    for (let inner of this.dataTable) {
      if (inner) {
        for (let inner_2lvl of inner) {
          allKeys.push(inner_2lvl[0]);
        }
      }
    }
    return allKeys;
  }
}

const myHashTable = new HashTable();
myHashTable.set("nails", 50);
myHashTable.set("nuts", 60);
myHashTable.set("nasir", 70);
console.log(myHashTable.get("nails"));
console.log(myHashTable.keys());
