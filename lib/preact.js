"use strict";
if ("undefined" == typeof self) var self = undefined;if ("undefined" == typeof global) var global = self;if ("undefined" == typeof process) var process = { env: {} };var $m = self.$m = self.$m || {},
    $req = require;require = function require(e) {
  return $m[e] ? ("function" == typeof $m[e] && $m[e](), $m[e].exports) : $req(e);
}, $m["src/lib/preact-browser"] = { exports: {} }, module.exports = { React: require("react/lib/React"), ReactDOM: require("react-dom/lib/ReactDOMServer") };