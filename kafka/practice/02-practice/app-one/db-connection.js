const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb://admin:password@${process.env.DB_HOST}:${process.env.DB_PORT}`,
    {
      authSource: "admin",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.DB_NAME,
    }
  );
  console.log("Connected to MongoDB");
};

module.exports = connectToDatabase;
