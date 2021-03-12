'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  api.users.setPassword = (user_id, attrs, done) => {
    let user;

    let getUser = (next) => {
      lib.users.get(
        user_id,
        (err, res) => {
          if (!res) {
            next(new Error('unknown user'));
          }
          user = res;
          next(err);
        });
    };

    let auth = (next) => {
      if (!attrs.hasOwnProperty('oldpassword')) {
        return next();
      }
      lib.users.checkPassword(user.id, attrs.oldpassword, next);
    };

    var setPassword = (next) => {
      console.log(user, attrs, 9944499);
      if (!attrs.hasOwnProperty('password')) {
        return next();
      }
      lib.users.setPassword(
        user.id,
        attrs.password,
        next);
    };

    let updateUser = (next) => {
      lib.users.get(
        user_id,
        (err, res) => {
          if (!res) {
            next(new Error('unknown user'));
          }
          user = res;
          next(err);
        });
    };

    async.series([
      getUser,
      auth,
      setPassword,
      updateUser
    ], (err) => {
      done(err, user);
    });
  };
};

