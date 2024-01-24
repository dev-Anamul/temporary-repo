const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

require("./schedular");

// intialize app
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3050;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
