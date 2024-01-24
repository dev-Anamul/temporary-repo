const dayjs = require("dayjs");

console.log(
  dayjs("Fri Nov 03 2023 00:00:00 GMT+0600 (Bangladesh Standard Time)").toDate()
);

console.log(new Date().toISOString());
