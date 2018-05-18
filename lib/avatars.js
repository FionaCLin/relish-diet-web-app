'use strict';

var fs = require('fs');
var Path = require('path');

module.exports = (opts) => {
  var lib = opts.lib;
  lib.avatars = {};

  var dir = Path.join(__dirname, '/avatars');
  fs.readdirSync(dir).forEach((file) => {
    if (['.', '#'].indexOf(file.substr(0, 1)) > -1) {
      return;
    }
    require(dir + '/' + file)(opts);
  });

  // export the methods
  return lib.avatars;
};
