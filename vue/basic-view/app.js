const app = Vue.createApp({
  data() {
    return {
      count: 0,
      numincrease: 0,
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
    increaseByNum() {
      if (this.numincrease > 0) {
        this.count += this.numincrease;
        this.numincrease = 0;
      } else {
        alert("Please enter a positive number");
      }
    },
  },
});

app.mount("#app");
