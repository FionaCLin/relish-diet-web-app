'use strict';

var fs = require('fs');
var async = require('async');
var _ = require('lodash');

var bcrypt = require('bcrypt');

module.exports = (opts) => {

  var lib = opts.lib;

  lib.timeslots = {};

  var dir = __dirname + '/timeslots';

  fs.readdirSync(dir).forEach((file) => {
    if (['.', '#'].indexOf(file.substr(0, 1)) > -1) {
      return;
    }
    require(dir + '/' + file)(opts);
  });

  // export the methods
  return lib.timeslots;

};
