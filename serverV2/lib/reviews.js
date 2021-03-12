'use strict';

const  fs = require('fs');
const  async = require('async');
const  _ = require('lodash');

 module.exports = (opts) => {

  let lib = opts.lib;

  lib.reviews = {};

  let dir = __dirname + '/reviews';

  fs.readdirSync(dir).forEach((file) => {
    if (['.', '#'].indexOf(file.substr(0, 1)) > -1) {
      return;
    }
    require(dir + '/' + file)(opts);
  });

  // export the methods
  return lib.reviews;

};
