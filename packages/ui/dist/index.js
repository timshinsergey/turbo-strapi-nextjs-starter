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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Alert: () => Alert,
  Spinner: () => Spinner
});
module.exports = __toCommonJS(src_exports);

// src/spinner/index.tsx
var import_react = require("react");
var import_classnames = __toESM(require_classnames());
var import_jsx_runtime = require("react/jsx-runtime");
var Spinner = (0, import_react.memo)(
  ({ svgClassName = "w-4 h-4 text-white", ariaLabelledby }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      role: "progressbar",
      "aria-labelledby": ariaLabelledby,
      className: "animate-spin inline-flex",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
        viewBox: "22 22 44 44",
        className: (0, import_classnames.default)(svgClassName, "animate-spinner inline-flex stroke-current stroke-3"),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
          cx: "44",
          cy: "44",
          r: "20.2",
          fill: "none"
        })
      })
    });
  }
);
Spinner.displayName = "Spinner";

// src/alert/index.tsx
var import_react2 = require("react");
var import_classnames2 = __toESM(require_classnames());
var import_jsx_runtime2 = require("react/jsx-runtime");
var Alert = (0, import_react2.memo)(({ className, children, variant = "default", ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
    role: "alert",
    className: (0, import_classnames2.default)(className, "p-4 text-sm rounded-lg", {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Spinner
});
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
