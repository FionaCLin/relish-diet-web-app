'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  // adds an active user with a username and password if provided

  // if username not provided, uses email add username

  api.users.add = (attrs, done) => {
    var user;

    // whitelist attrs
    var keys = [
      'username',
      'password',
      'email',
      'nameGiven',
      'nameFamily',
      'birthday',
      'goal',
      'calories_goal',
      'gender'
    ];

    attrs = _.pick(attrs, keys);
    if (!attrs.hasOwnProperty('username') || !attrs.username) {
      return done(new Error('No username or email address prvoided'));
    }

    var confirmEmailUnique = (next) => {
      if (!attrs.email) {
        return next();
      }
      lib.users.getByEmail(
        attrs.email,
        (err, user) => {
          if (err) {
            return next(err);
          }
          if (user) {
            return next(new Error('email address in use'));
          }
          next();
        });
    };

    var confirmUsernameUnique = (next) => {
      if (!attrs.username) {
        return next();
      }
      lib.users.getByUsername(
        attrs.username,
        (err, user) => {
          if (err) {
            return next(err);
          }
          if (user) {
            return next(new Error('username in use'));
          }
          next();
        });
    };

    var create = (next) => {
      lib.users.add(
        attrs,
        (err, res) => {
          if (err) {
            return next(err);
          }
          user = res;
          next();
        });
    };

    var setPassword = (next) => {
      if (!attrs.hasOwnProperty('password')) {
        return next();
      }
      lib.users.setPassword(
        user.id,
        attrs.password,
        next);
    };

    var get = (next) => {
      lib.users.get(
        user.id,
        (err, res) => {
          if (err) {
            return next(err);
          }
          user = res;
          next();
        });
    };

    async.series([
      confirmEmailUnique,
      confirmUsernameUnique,
      create,
      setPassword,
      get
    ], (err) => {
      done(err, user);
    });
  };
};
