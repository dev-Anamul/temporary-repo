import { io } from "socket.io-client";
import "./App.css";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]); // [message1, message2, message3

  // CONNECT TO SOCKET.IO SERVER
  const socket = io("ws://localhost:3000", {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });

  socket.on("message", (data) => {
    console.log(data);
    setMessages([...messages, data]);
  });

  socket.on("error", (error) => {
    console.log(error);
  });

  return (
    <div className="App">
      <h1>Socket.io</h1>

      {/* SEND MESSAGE FORM */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const message = e.target.message.value;
          socket.emit("message", message);
          e.target.message.value = "";
        }}
      >
        <input type="text" name="message" />
        <button type="submit">Send</button>

        {/* MESSAGES */}
        <div>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
