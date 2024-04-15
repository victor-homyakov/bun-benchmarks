const net = require("node:net");
const { createBigJson } = require("./fake-data");
const { incrementRequestCount } = require("../rps");

const server = net.createServer((socket) => {
  socket.once("data", (data) => {
    incrementRequestCount();
    const json = createBigJson();
    const content = JSON.stringify(json);
    const response =
      "HTTP/1.1 200 OK\r\nContent-Type: application/json\r\nContent-Length: " +
      content.length +
      "\r\n\r\n" +
      content;
    // socket.write(response); socket.end(e => { e && console.log(e); });
    socket.end(response, (e) => {
      e && console.log(e);
    });
  });
  socket.on("error", (e) => {
    console.log(e);
  });
});

const PORT = Number(process.env.PORT || 8000);
console.log(`Starting net on http://localhost:${PORT}`);
server.listen(PORT);
