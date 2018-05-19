'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {

  let lib = opts.lib;
  let api = opts.api;

  api.users.get = (user_id, done) => {

    let user;

    let getUser = (next) => {
      lib.users.get(
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
