const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.sockets.on("connection", socket => {
  console.log(socket.id);

  socket.on("message", userMessage => {
    const { username, message } = userMessage;
    io.emit("message", `${username} | ${message} from server`);
  });
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
