const http = require("node:http");
const { stringify } = require("./stringify");
const { createBigJson } = require("./fake-data");
const { incrementRequestCount } = require("../rps");

const server = http.createServer((req, res) => {
  incrementRequestCount();
  res.setHeader("Content-Type", "application/json");
  const json = createBigJson();
  // console.log("Request", req.method, req.url, json);
  stringify(json, res);
});

server.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});

const PORT = Number(process.env.PORT || 8000);
console.log(`Starting http on http://localhost:${PORT}`);
server.listen(PORT);
