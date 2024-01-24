const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/error-handler");

const app = express();

// config
dotenv.config();

// middlewares
app.use([morgan("dev"), cors(), express.json()]);

// routes
app.use("/api/users", require("./routes/user-router"));

// unmathced routes
app.all("*", (_req, res, _next) => {
  res.status(404).json({ error: "Resource not found" });
});

// error handler
app.use(errorHandler.globalErrorHandler);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
