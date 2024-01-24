const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectWithRetry = require("./config/db");

const app = express();
dotenv.config({ path: "./config/config.env" });

// parser middleware
app.use(express.json());

// logger middleware
app.use(morgan("dev"));
app.use(cors());

// connect to database
connectWithRetry();

// routes
app.use("/v1/post", require("./router/postRouter"));
app.use("/v1/user", require("./router/userRouter"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
