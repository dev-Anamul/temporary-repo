const mongoose = require("mongoose");

const createDbConnection = async (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("DATABASE CONNECTION SUCCESSFUL");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = createDbConnection;
