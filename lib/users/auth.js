'use strict';

var async = require('async');
var authenticator = require('authenticator');

var isDigits = new RegExp('^[0-9]+$');

module.exports = (opts) => {
  var lib = opts.lib;

  lib.users.auth = (email, password, done) => {
    var user;

    var getUser = (next) => {
      lib.users.getByEmail(email, (err, res) => {
        if (err) {
          return next(err);
        }
        user = res;
        next();
      });
    };

    var auth = (next) => {
      lib.users.checkPassword(user.id, password, next);
    };

    async.series([
      getUser,
      auth,
    ], (err) => {
      if (err) {
        return done(err);
      }
      done(err, user);
    });
  };
};
