'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  api.users.set = (user_id, attrs, done) => {
    let user;
    // whitelist attrs
    let keys = [
      'email',
      'username',
      'birthday',
      'goal',
      'gender',
      'nameGiven',
      'nameFamily',
      'calories_goal',
      'height',
      'weight'
    ];

    attrs = _.pick(attrs, keys);

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

    let ensureEmailUnique = (next) => {
      if (!attrs.email) {
        return next();
      }
      // check new email address is not used
      lib.users.getByEmail(
        attrs.email, (err, res) => {
          if (err) {
            return next(err);
          }

          if (res && res.id !== user_id) {
            return next(new Error('that email address is in use'));
          }

          next();
        });
    };

    let set = (next) => {
      lib.users.set(
        user_id,
        attrs, (err) => {
          next(err);
        });
    };

    async.series([
        getUser,
        ensureEmailUnique,
        set
      ], (err) => {
        done(err);
      });
  };
};

