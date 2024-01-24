class TimeLimitedCache {
  cache = new Map();

  set(key, value, duration) {
    let isExist = this.cache.get(key);

    if (isExist) clearTimeout(isExist.timeOutId);

    let timeOutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, {
      value,
      timeOutId,
    });
    return Boolean(isExist);
  }

  get(key) {
    if (this.cache.has(key)) return this.cache.get(key).value;
    return -1;
  }

  count() {
    return this.cache.size;
  }
}
