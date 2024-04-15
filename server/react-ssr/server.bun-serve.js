import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { App } from "./app";
import { incrementRequestCount } from "../rps";

/*
const headers = {
  headers: {
    "Content-Type": "text/html",
    "Cache-Control": "no-transform",
    "Ballast": "abcdefgqwertyuiopasdfghjkl;zxcvbnm,./1234567890=",
  },
};
*/

const PORT = Number(process.env.PORT || 8000);
console.log(`Starting React SSR Bun.serve on http://localhost:${PORT}`);

Bun.serve({
  port: PORT,
  fetch(req) {
    incrementRequestCount();
    const body = renderToString(createElement(App));
    return new Response(body, {
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "no-transform",
        "Ballast": "abcdefgqwertyuiopasdfghjkl;zxcvbnm,./1234567890=",
      },
    });
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: { "Content-Type": "text/html" },
    });
  },
});
