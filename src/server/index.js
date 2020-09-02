var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (mess) => {
    io.emit("chat message", mess);
  });
});

http.listen(3001, () => {
  console.log("listening on *:3001");
});
