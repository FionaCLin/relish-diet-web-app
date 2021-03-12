'use strict';

const fs = require('fs');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  api.mealplans = {};

  let dir = __dirname + '/mealplans';

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
  return api.mealplans;
};
