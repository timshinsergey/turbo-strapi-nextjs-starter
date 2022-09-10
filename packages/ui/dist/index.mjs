// src/NewTabLink.tsx
import { jsx } from "react/jsx-runtime";
var NewTabLink = ({
  children,
  href,
  ...other
}) => {
  return /* @__PURE__ */ jsx("a", {
    target: "_blank",
    rel: "noreferrer",
    href,
    ...other,
    children
  });
};

// src/CounterButton.tsx
import * as React from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var CounterButton = () => {
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ jsxs("div", {
    style: {
      background: `rgba(255,255,255,.05)`,
      borderRadius: `8px`,
      padding: 16
    },
    children: [
      /* @__PURE__ */ jsxs("p", {
        children: [
          "This is component is from ",
          /* @__PURE__ */ jsx2("code", {
            children: "ui"
          })
        ]
      }),
      /* @__PURE__ */ jsx2("p", {
        children: /* @__PURE__ */ jsxs("button", {
          type: "button",
          onClick: () => setCount((c) => c + 1),
          children: [
            "count ",
            count
          ]
        })
      })
    ]
  });
};
export {
  CounterButton,
  NewTabLink
};
