"use strict";

module.exports = {
  env: {
    node: true
  },
  extends: ["./flowtype.js"].map(require.resolve)
};
