const app = require("express")();
const { Server } = require("socket.io");
const { availableParallelism } = require("node:os");

// enable CORS
const cors = require("cors");
const { log } = require("node:console");

//
app.use(
  cors({
    origin: "*",
  })
);

log("availableParallelism: ", availableParallelism());

const httpServer = require("http").Server(app, {
  cors: {
    origin: "*",
  },
});

const io = new Server(httpServer, {
  connectionStateRecovery: {
    timeout: 3000,
  },
  pingInterval: 10000,
  pingTimeout: 5000,
});

io.on("connection", (socket) => {
  log("socket handshake: ", socket.handshake);
  console.log("a user connected");

  socket.on("message", (msg) => {
    console.log("message: " + msg);
    io.emit("message", msg);
  });

  // disconnect is fired when a client leaves the server
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
