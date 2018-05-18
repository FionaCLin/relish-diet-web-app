'use strict';

var fs = require('fs');

module.exports = (opts) => {
  var lib = opts.lib;
  lib.storage = {};

  // methods
  var dir = __dirname + '/storage';

  fs.readdirSync(dir).forEach((file) => {
    if (['.', '#'].indexOf(file.substr(0, 1)) > -1) {
      return;
    }
    require(dir + '/' + file)(opts);
  });

  return lib.storage;
};
