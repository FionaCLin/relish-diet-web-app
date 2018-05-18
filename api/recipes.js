'use strict';

var fs = require('fs');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  api.users = {};

  var dir = __dirname + '/recipes';
  console.log("here");
  console.log(dir);
  console.log("here");


  // fs.readdirSync(dir).forEach((file) => {
  //   if (['.', '#'].indexOf(file.substr(0, 1)) > -1) {
  //     return;
  //   }
  //   console.log(file);
  //   require(dir + '/' + file)({
  //     api: api,
  //     lib: lib
  //   });
  // });

  require(dir+ '/' + "add.js") ({
    api: api,
    lib: lib
  });
  // export the api methods
  return api.recipes;
};
