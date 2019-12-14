'use strict';

const fs = require('fs');
const async = require('async');
const _ = require('lodash');

const bcrypt = require('bcrypt');

module.exports = (opts) => {

  let lib = opts.lib;

  lib.users = {};

  let dir = __dirname + '/users';

  fs.readdirSync(dir).forEach((file) => {
    if (['.', '#'].indexOf(file.substr(0, 1)) > -1) {
      return;
    }
    require(dir + '/' + file)(opts);
  });

  // export the methods
  return lib.users;

};
