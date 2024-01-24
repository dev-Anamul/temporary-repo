const mongoose = require("mongoose");

const connectWithRetry = () => {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch(() => {
      console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
      setTimeout(connectWithRetry, 5000);
    });
};

module.exports = connectWithRetry;
