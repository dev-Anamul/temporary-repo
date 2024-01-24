class RecentCounter {
  #requests;
  constructor() {
    this.#requests = [];
  }

  ping(t) {
    this.#requests.push(t);

    const start = t - 3000,
      end = t;

    console.log("range => ", start, end);
    return this.#requests.reduce((acc, cur) => {
      if (cur >= start && cur <= end) return (acc += 1);
      else return acc;
    }, 0);
  }
}

const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));
console.log(recentCounter.ping(100));
console.log(recentCounter.ping(3001));
console.log(recentCounter.ping(3002));
console.log(recentCounter.ping(3202));
