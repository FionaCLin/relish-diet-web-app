'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;

  api.mealplans.getByUser = (user_id, done) => {
    let user, mealplans;
    let getUser = (next) => {
      lib.users.get(
        user_id,
        (err, res) => {
          if (err || !res) {
            return next(new Error('unknown user'));
          }
          user = res;
          next(err);
        });
    };

    let getplans = next => {
      lib.mealplans.getByUser(
        user_id,
        (err, res) => {
          if (err || !res) {
            return done(new Error('mealplans not found'));
          }
          mealplans = res;
          next();
        });
    };

    async.series([
      getUser,
      getplans
    ], (err) => {
      if (!mealplans.timeslots) {
        mealplans.timeslots = [];
      }
      done(err, mealplans);
    });
  };
};
