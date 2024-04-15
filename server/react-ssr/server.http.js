const http = require("node:http");
const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const { App } = require("./app");
const { incrementRequestCount } = require("../rps");

const server = http.createServer((req, res) => {
  incrementRequestCount();
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "no-transform");
  res.setHeader("Ballast", "a"); // Node
  // res.setHeader("Ballast", "abcdefghqwertyuiopasdfghjkl;zxcvbnm,./1234567890"); // Bun
  const body = renderToString(createElement(App));
  // console.log("Request", req.method, req.url, body);
  // res.write(body, "utf8", undefined);
  // res.end();
  res.end(body, "utf8", undefined);
});

server.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});

const PORT = Number(process.env.PORT || 8000);
console.log(`Starting React SSR http on http://localhost:${PORT}`);
server.listen(PORT);
