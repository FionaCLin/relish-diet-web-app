'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;

  api.mealplans.del = (plan_id, done) => {
    // Validate input fields.

    let checkValid = next => {
      if (typeof plan_id !== 'number') return done(new Error('plan id is not a string'));
      next();
    };

    let delMealPlanner = next => {
      lib.mealplans.del(
        plan_id,
        (err, res) => {
          if (err) {
            return done(new Error('Meal plan could not be deleted.'));
          }
          next();
        });
    };

    let timeslots = [];

    let getTimeSlots = next => {
      lib.timeslots.getByPlan(
        plan_id,
        (err, res) => {
          if (err) {
            return done(new Error('Error getting time slots.'));
          }
          timeslots = res;
          next();
        });
    };

    let delTimeSlots = next => {
      timeslots.forEach(slot => {
        lib.timeslots.del(
          slot.timeslot_id,
          (err, res) => {
            if (err) {
              return done(new Error('Couldnt delete time slots.'));
            }
          });
      });
      next();
    };

    // TODO: compute the total calories, fat, protein, cabs and upset the recipe
    async.series([
      checkValid,
      getTimeSlots,
      delTimeSlots,
      delMealPlanner
    ], (err) => {
      done(err);
    });
  };
};
