'use strict';

const fs = require('fs');

module.exports = (opts) => {
  let lib = opts.lib;
  lib.storage = {};

  // methods
  let dir = __dirname + '/storage';

  fs.readdirSync(dir).forEach((file) => {
    if (['.', '#'].indexOf(file.substr(0, 1)) > -1) {
      return;
    }
    require(dir + '/' + file)(opts);
  });

  return lib.storage;
};
