// const React = require("react");
const { createElement } = require("react");

// Node: https://github.com/oven-sh/bun/blob/main/bench/react-hello-world/react-hello-world.node.jsx
// const App = () => {
//   return createElement(
//     "html",
//     null,
//     createElement(
//       "body",
//       null,
//       createElement("h1", null, "Hello World")
//     )
//   );
// };

// Bun: https://github.com/oven-sh/bun/blob/main/bench/react-hello-world/react-hello-world.jsx
const App = () => {
  return createElement(
    "html",
    null,
    createElement(
      "body",
      null,
      createElement("h1", null, "Hello World"),
      createElement("p", null, "This is an example.")
    )
  );
};

module.exports = { App };
