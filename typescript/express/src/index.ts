import express, { Request, Response } from "express";
import loginRouter from "./loginRouter";

const app = express();

app.use("/login", loginRouter);

app.listen(3500, () => {
  console.log("Server started on port 3500");
});
