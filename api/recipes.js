'use strict';

var fs = require('fs');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  api.recipes = {};

  var dir = __dirname + '/recipes';

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
  return api.recipes;
};
