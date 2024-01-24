const express = require("express");
const app = express();
const middleware = require("./middleware");
const routes = require("./routes");
const { notFound, errorHandler } = require("./error");

app.use(middleware);
app.use(routes);
app.use(notFound);
app.use(errorHandler); 

module.exports = app;
