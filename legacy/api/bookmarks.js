'use strict';

const fs = require('fs');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  api.bookmarks = {};

  let dir = __dirname + '/bookmarks';

  fs.readdirSync(dir).forEach((file) => {
    if (['.', '#'].indexOf(file.substr(0, 1)) > -1) {
      return;
    }
    require(dir + '/' + file)({
      api: api,
      lib: lib
    });
  });

  // export the api methods
  return api.bookmarks;
};
