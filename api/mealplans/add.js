'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;

  api.mealplans.add = (attrs, done) => {
    var mealplan;
    var user;
    // whitelist attrs
    var keys = [
      'title',
      'user_id',
      'timeslots',
      'calories',
      'cabs',
      'protein',
      'fat',
      'sodium'

    ];

    attrs = _.pick(attrs, keys);

    // Validate input fields.

    let checkValid = next => {
      if (typeof attrs.title !== 'string') return done(new Error('title is not a string'));
      next();
    };

    // check to see if user id is valid in database
    // use lib.users.getbyid
    // if not exisiting, return user not found
    // if existing - create.

    let checkUser = next => {
      lib.users.get(attrs.user_id, (err, res) => {
        if (!res) {
          return next(new Error('unknown user'));
        }
        user = res;
        next(err);
      });
    };

    let addMealPlanner = next => {
      lib.mealplans.add(
        attrs,
        (err, res) => {
          if (err) {
            return done(new Error('Meal plan could not be added.'));
          }
          mealplan = res;
          next();
        });
    };

    let addTimeSlots = next => {
      if (attrs.timeslots && typeof attrs.timeslots !== 'array') {
        // nothing to do if no timeslots
        return next();
      } else if (attrs.timeslots) {
        attrs.timeslots.forEach(slot => {
          slot.plan_id = mealplan.plan_id;
          lib.timeslots.add(
            slot,
            (err, res) => {
              if (err) {
                return done(new Error('Time slot could not be added.'));
              }
              slot.id = res.id;
            });
        });
        next();
      }
      next();
    };

    async.series([
      checkValid,
      addMealPlanner,
      addTimeSlots
    ], (err) => {
      done(err, mealplan);
    });
  };
};
