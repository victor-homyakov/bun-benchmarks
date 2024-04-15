// npm install uNetworking/uWebSockets.js#v20.43.0
const uws = require("uWebSockets.js");
const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const { App } = require("./app");
const { incrementRequestCount } = require("../rps");

const PORT = Number(process.env.PORT || 8000);

uws
  .App()
  .get("/*", (res, req) => {
    incrementRequestCount();
    res
      .writeStatus("200 OK")
      .writeHeader("Content-Type", "text/html")
      .writeHeader("Cache-Control", "no-transform")
      .writeHeader("Ballast", "qwertyuiopasdfghjkl;zxcvbnm,./=")
      .end(renderToString(createElement(App)));
  })
  .listen(PORT, (listenSocket) => {
    if (listenSocket) {
      console.log(`Starting React SSR uWebSockets on http://localhost:${PORT}`);
    }
  });
