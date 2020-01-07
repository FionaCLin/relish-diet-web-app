'use strict';

const fs = require('fs');
const Path = require('path');

module.exports = (opts) => {
  let lib = opts.lib;
  lib.avatars = {};

  let dir = Path.join(__dirname, '/avatars');
  fs.readdirSync(dir).forEach((file) => {
    if (['.', '#'].indexOf(file.substr(0, 1)) > -1) {
      return;
    }
    require(dir + '/' + file)(opts);
  });

  // export the methods
  return lib.avatars;
};
