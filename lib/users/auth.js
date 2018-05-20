'use strict';

const async = require('async');
const authenticator = require('authenticator');

const isDigits = new RegExp('^[0-9]+$');

module.exports = (opts) => {
  let lib = opts.lib;

  lib.users.auth = (email, password, done) => {
    let user;

    let getUser = (next) => {
      lib.users.getByEmail(email, (err, res) => {
        if (err) {
          return next(err);
        }
        user = res;
        next();
      });
    };

    let auth = (next) => {
      lib.users.checkPassword(user.id, password, next);
    };

    async.series([
      getUser,
      auth
    ], (err) => {
      if (err) {
        return done(err);
      }
      done(err, user);
    });
  };
};
