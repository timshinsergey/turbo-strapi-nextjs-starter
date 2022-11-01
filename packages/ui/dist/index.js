"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../../node_modules/classnames/index.js"(exports, module2) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        classNames.default = classNames;
        module2.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Alert: () => Alert,
  Button: () => Button,
  ButtonLink: () => ButtonLink,
  Container: () => Container,
  Icon: () => Icon,
  IconButton: () => IconButton,
  Spinner: () => Spinner
});
module.exports = __toCommonJS(src_exports);

// src/icon/index.tsx
var import_react = require("react");
var import_classnames = __toESM(require_classnames());
var import_jsx_runtime = require("react/jsx-runtime");
var Icon = (0, import_react.memo)(({ name, className, size = "small", section = "common" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    className: (0, import_classnames.default)(className, {
      ["h-3.5 w-3.5"]: size === "small",
      ["h-5 w-5"]: size === "medium",
      ["h-6 w-6"]: size === "large"
    }),
    focusable: "false",
    "aria-hidden": "true",
    fill: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("use", {
      xlinkHref: `/sprites/${section}.svg#${name.toLocaleLowerCase()}`
    })
  });
});
Icon.displayName = "Icon";

// src/container/index.tsx
var import_react2 = require("react");
var import_classnames2 = __toESM(require_classnames());
var import_jsx_runtime2 = require("react/jsx-runtime");
var Container = (0, import_react2.memo)(({ children, el: Component = "div", className }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Component, {
    className: (0, import_classnames2.default)(className, "container"),
    children
  });
});
Container.displayName = "Container";

// src/spinner/index.tsx
var import_react3 = require("react");
var import_classnames3 = __toESM(require_classnames());
var import_jsx_runtime3 = require("react/jsx-runtime");
var Spinner = (0, import_react3.memo)(({ svgClassName = "w-4 h-4", ariaLabelledby }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
    role: "progressbar",
    "aria-labelledby": ariaLabelledby,
    className: "animate-spin inline-flex",
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", {
      viewBox: "22 22 44 44",
      className: (0, import_classnames3.default)(svgClassName, "animate-spinner inline-flex stroke-current stroke-3"),
      focusable: "false",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", {
        cx: "44",
        cy: "44",
        r: "20.2",
        fill: "none"
      })
    })
  });
});
Spinner.displayName = "Spinner";

// src/alert/index.tsx
var import_react4 = require("react");
var import_classnames4 = __toESM(require_classnames());
var import_jsx_runtime4 = require("react/jsx-runtime");
var Alert = (0, import_react4.memo)(({ className, children, variant = "default", ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
    role: "alert",
    className: (0, import_classnames4.default)(className, "p-4 text-sm rounded-lg", {
      ["bg-white text-black-50 dark:bg-black-50 dark:text-white"]: variant === "default",
      ["text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800"]: variant === "success",
      ["text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800"]: variant === "error",
      ["text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800"]: variant === "warning",
      ["text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800"]: variant === "info"
    }),
    ...props,
    children
  });
});
Alert.displayName = "Alert";

// src/button/button/index.tsx
var import_react6 = require("react");

// src/button/default/index.tsx
var import_react5 = require("react");
var import_classnames5 = __toESM(require_classnames());
var import_jsx_runtime5 = require("react/jsx-runtime");
var defaultElement = "button";
var DefaultButton = (0, import_react5.forwardRef)(function DefaultButton2({
  el,
  className,
  variant = "base",
  size = "base",
  color = "primary",
  ...props
}, ref) {
  const Element = el || defaultElement;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Element, {
    ref,
    className: (0, import_classnames5.default)(
      className,
      "grid grid-flow-col relative justify-center items-center rounded-lg font-bold gap-2 focus:ring-4 focus:outline-none disabled:cursor-not-allowed disabled:opacity-25",
      {
        ["text-white"]: variant === "filled",
        ["border [&:not(:disabled)]:hover:text-white [&:not(:disabled)]:dark:hover:text-white"]: variant === "outlined",
        ["text-blue-700 [&:not(:disabled)]:hover:bg-blue-100"]: color === "primary" && variant === "base",
        ["bg-blue-700 [&:not(:disabled)]:hover:bg-blue-800 focus:ring-blue-300 [&:not(:disabled)]:dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"]: color === "primary" && variant === "filled",
        ["text-blue-700 border-blue-700 [&:not(:disabled)]:hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 [&:not(:disabled)]:dark:hover:bg-blue-600 dark:focus:ring-blue-800"]: color === "primary" && variant === "outlined",
        ["text-purple-700 [&:not(:disabled)]:hover:bg-purple-100"]: color === "secondary" && variant === "base",
        ["bg-purple-700 [&:not(:disabled)]:hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 [&:not(:disabled)]:dark:hover:bg-purple-700 dark:focus:ring-purple-900"]: color === "secondary" && variant === "filled",
        ["text-purple-700 border-purple-700 [&:not(:disabled)]:hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 [&:not(:disabled)]:dark:hover:bg-purple-500 dark:focus:ring-purple-800"]: color === "secondary" && variant === "outlined",
        ["text-yellow-400 [&:not(:disabled)]:hover:bg-yellow-100"]: color === "warning" && variant === "base",
        ["bg-yellow-400 [&:not(:disabled)]:hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900"]: color === "warning" && variant === "filled",
        ["text-yellow-400 border-yellow-400 [&:not(:disabled)]:hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 [&:not(:disabled)]:dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"]: color === "warning" && variant === "outlined",
        ["text-green-700 [&:not(:disabled)]:hover:bg-green-100"]: color === "success" && variant === "base",
        ["bg-green-700 [&:not(:disabled)]:hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 [&:not(:disabled)]:dark:hover:bg-green-700 dark:focus:ring-green-800"]: color === "success" && variant === "filled",
        ["text-green-700 border-green-700 [&:not(:disabled)]:hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 [&:not(:disabled)]:dark:hover:bg-green-600 dark:focus:ring-green-800"]: color === "success" && variant === "outlined",
        ["text-red-700 [&:not(:disabled)]:hover:bg-red-100"]: color === "error" && variant === "base",
        ["bg-red-700 [&:not(:disabled)]:hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 [&:not(:disabled)]:dark:hover:bg-red-700 dark:focus:ring-red-900"]: color === "error" && variant === "filled",
        ["text-red-700 border-red-700 [&:not(:disabled)]:hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 [&:not(:disabled)]:dark:hover:bg-red-600 dark:focus:ring-red-800"]: color === "error" && variant === "outlined",
        ["py-2 px-3 text-xs"]: size === "extra-small",
        ["py-2 px-3 text-sm"]: size === "small",
        ["py-2.5 px-5 text-sm"]: size === "base",
        ["py-3 px-5 text-base"]: size === "large",
        ["py-3.5 px-6 text-base"]: size === "extra-large"
      }
    ),
    ...props
  });
});

// src/button/button/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Button = (0, import_react6.memo)(
  (0, import_react6.forwardRef)(
    ({ children, loading, disabled, rightIcon, leftIcon, ...props }, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(DefaultButton, {
        ref,
        disabled: loading || disabled,
        tabIndex: loading || disabled ? -1 : 0,
        type: "button",
        ...props,
        children: [
          loading && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Spinner, {
            svgClassName: "w-4 h-4"
          }),
          leftIcon && !loading && leftIcon,
          children,
          rightIcon && !loading && rightIcon
        ]
      });
    }
  )
);
Button.displayName = "Button";

// src/button/icon-button/index.tsx
var import_react7 = require("react");
var import_classnames6 = __toESM(require_classnames());
var import_jsx_runtime7 = require("react/jsx-runtime");
var IconButton = (0, import_react7.memo)(
  (0, import_react7.forwardRef)(
    ({
      variant = "base",
      size = "base",
      color = "primary",
      className,
      disabled,
      children,
      loading,
      ...props
    }, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", {
        ref,
        disabled: loading || disabled,
        tabIndex: loading || disabled ? -1 : 0,
        type: "button",
        className: (0, import_classnames6.default)(
          className,
          "grid relative rounded-lg focus:ring-4 focus:outline-none disabled:cursor-not-allowed disabled:opacity-25",
          {
            ["text-white"]: variant === "filled",
            ["border [&:not(:disabled)]:hover:text-white [&:not(:disabled)]:dark:hover:text-white"]: variant === "outlined",
            ["text-blue-700 [&:not(:disabled)]:hover:bg-blue-100 "]: color === "primary" && variant === "base",
            ["bg-blue-700 [&:not(:disabled)]:hover:bg-blue-800 focus:ring-blue-300 [&:not(:disabled)]:dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"]: color === "primary" && variant === "filled",
            ["text-blue-700 border-blue-700 [&:not(:disabled)]:hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 [&:not(:disabled)]:dark:hover:bg-blue-600 dark:focus:ring-blue-800"]: color === "primary" && variant === "outlined",
            ["text-purple-700 [&:not(:disabled)]:hover:bg-purple-100"]: color === "secondary" && variant === "base",
            ["bg-purple-700 [&:not(:disabled)]:hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 [&:not(:disabled)]:dark:hover:bg-purple-700 dark:focus:ring-purple-900"]: color === "secondary" && variant === "filled",
            ["text-purple-700 border-purple-700 [&:not(:disabled)]:hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 [&:not(:disabled)]:dark:hover:bg-purple-500 dark:focus:ring-purple-900"]: color === "secondary" && variant === "outlined",
            ["text-yellow-400 [&:not(:disabled)]:hover:bg-yellow-100"]: color === "warning" && variant === "base",
            ["bg-yellow-400 [&:not(:disabled)]:hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900"]: color === "warning" && variant === "filled",
            ["text-yellow-400 border-yellow-400 [&:not(:disabled)]:hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 [&:not(:disabled)]:dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"]: color === "warning" && variant === "outlined",
            ["text-green-700 [&:not(:disabled)]:hover:bg-green-100"]: color === "success" && variant === "base",
            ["bg-green-700 [&:not(:disabled)]:hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 [&:not(:disabled)]:dark:hover:bg-green-700 dark:focus:ring-green-800"]: color === "success" && variant === "filled",
            ["text-green-700 border-green-700 [&:not(:disabled)]:hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 [&:not(:disabled)]:dark:hover:bg-green-600 dark:focus:ring-green-800"]: color === "success" && variant === "outlined",
            ["text-red-700 [&:not(:disabled)]:hover:bg-red-100"]: color === "error" && variant === "base",
            ["bg-red-700 [&:not(:disabled)]:hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 [&:not(:disabled)]:dark:hover:bg-red-700 dark:focus:ring-red-900"]: color === "error" && variant === "filled",
            ["text-red-700 border-red-700 [&:not(:disabled)]:hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 [&:not(:disabled)]:dark:hover:bg-red-600 dark:focus:ring-red-900"]: color === "error" && variant === "outlined",
            ["p-2"]: size === "small",
            ["p-2.5"]: size === "base",
            ["p-3"]: size === "large"
          }
        ),
        ...props,
        children: loading ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Spinner, {}) : children
      });
    }
  )
);
IconButton.displayName = "IconButton";

// src/button/link/index.tsx
var import_react8 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var ButtonLink = (0, import_react8.memo)(({ children, rightIcon, leftIcon, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(DefaultButton, {
    el: "a",
    ...props,
    children: [
      leftIcon && leftIcon,
      children,
      rightIcon && rightIcon
    ]
  });
});
ButtonLink.displayName = "ButtonLink";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Button,
  ButtonLink,
  Container,
  Icon,
  IconButton,
  Spinner
});
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
