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

    let genToken = (next) => {
      if (user.token) {
        return next();
      }
      let tokenKey = authenticator.generateKey();
      let formattedToken = authenticator.generateToken(tokenKey);

      lib.users.set(
        user.id, {
          token: formattedToken,
          tokenkey: tokenKey
        }, (err, res) => {
          if (err || !res) {
            return done(new Error('invalid token'));
          }
          user = res;
          next(err);
        });
    };

    let auth = (next) => {
      lib.users.checkPassword(user.id, password, next);
    };

    async.series([
      getUser,
      genToken,
      auth
    ], (err) => {
      if (err) {
        return done(err);
      }
      done(err, user);
    });
  };
};
