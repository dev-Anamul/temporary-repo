import express, { Express } from "express";

const app: Express = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Auth service is up and running",
  });
});

const port = process.env.PORT || 7050;

app.listen(port, () => {
  console.log(`Auth service is running on port : ${port}`);
});
