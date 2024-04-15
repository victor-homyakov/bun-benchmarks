import { incrementRequestCount } from "../rps";
import { createBigJson } from "./fake-data";

const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

const PORT = Number(process.env.PORT || 8000);
console.log(`Starting Bun.serve on http://localhost:${PORT}`);

Bun.serve({
  port: PORT,
  fetch(req) {
    incrementRequestCount();
    const json = createBigJson();
    // console.log("Request", req.method, req.url, json);
    const body = JSON.stringify(json);
    return new Response(body, headers);
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: { "Content-Type": "text/html" },
    });
  },
});
