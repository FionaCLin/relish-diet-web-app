'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {

  var lib = opts.lib;
  var api = opts.api;

  api.users.get = (user_email, done) => {

    var user;

    var getUser = (next) => {
      lib.users.getByEmail(
        user_id,
        (err, res) => {
          if (!res) {
            return next(new Error('unknown user'));
          }
          user = res;
          next(err);
        });
    };

    async.series([
      getUser
    ], (err) => {
      done(err, user);
    });
  };
};
