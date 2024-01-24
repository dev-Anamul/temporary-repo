class SnapshotArray {
  #arr;
  #snap = 0;
  constructor(length) {
    this.#arr = Array(length).fill(0);
  }

  set(index, val) {
    if (this.#arr[index] === 0) this.#arr[index] = [[this.#snap, val]];
    else this.#arr[index].push([this.#snap, val]);
  }

  snap() {
    let prev = this.#snap;
    this.#snap += 1;
    return prev;
  }

  get(index, snap_id) {
    let val = 0;
    if (this.#arr[index]) {
      for (let inner of this.#arr[index]) {
        if (inner[0] === snap_id) val = inner[1];
      }
    }
    return val;
  }
}

const snapArr = new SnapshotArray(1);
snapArr.set(0, 3);
snapArr.set(0, 4);
snapArr.set(0, 5);
let snapId = snapArr.snap();

console.log(snapArr.get(0, snapId));
