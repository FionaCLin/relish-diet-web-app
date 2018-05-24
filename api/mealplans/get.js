'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;

  api.mealplans.get = (plan_id, done) => {
    var mealplan;

    let getMealPlanner = next => {
      lib.mealplans.get(
        plan_id,
        (err, res) => {
          if (err || !res) {
            return done(new Error('Requested meal plan not found'));
          }
          mealplan = res;
          next();
        }
      );
    };

    let getTimeSlots = next => {
      lib.timeslots.getByPlan(
        plan_id,
        (err, res) => {
          if (err) {
            return done(new Error('Error getting time slots.'));
          }
          if (!res) {
            mealplan.timeslots = [];
          }
          mealplan.timeslots = res;
          next();
        });
    };

    async.series([
      getMealPlanner,
      getTimeSlots
    ], (err) => {
      done(err, mealplan);
    });
  };
};
