const express = require("express");
const app = express();
const todoRoutes = require("./routes/todo");
const morgan = require("morgan");
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get("/health", (_req, res) => {
  res.send("Hello World!");
});

app.use("/todos", todoRoutes);

module.exports = app;
