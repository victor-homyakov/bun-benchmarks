// npm install uNetworking/uWebSockets.js#v20.43.0
const uws = require("uWebSockets.js");
const { createBigJson } = require("./fake-data");
const { incrementRequestCount } = require("../rps");

const PORT = Number(process.env.PORT || 8000);

uws
  .App()
  .get("/*", (res, req) => {
    incrementRequestCount();
    res
      .writeStatus("200 OK")
      .writeHeader("Content-Type", "application/json")
      .end(JSON.stringify(createBigJson()));
  })
  .listen(PORT, (listenSocket) => {
    if (listenSocket) {
      console.log(`Starting uWebSockets on http://localhost:${PORT}`);
    }
  });
