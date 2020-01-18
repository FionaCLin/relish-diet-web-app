"use strict";

var _ = require("lodash");
var async = require("async");

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;

  api.users.get = (identifier, done) => {
    lib.users.get(identifier, (err, res) => {
      if (!res) {
        return done(new Error("unknown user"));
      }
      done(err, res);
    });
  };
};
