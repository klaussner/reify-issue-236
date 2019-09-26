"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var fs = require("fs");

Object.keys(fs).forEach(function(k) {
  if (k !== "default")
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: function() {
        return fs[k];
      }
    });
});
