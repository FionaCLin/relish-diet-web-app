"use strict";

var _ = require("lodash");
var async = require("async");

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;


  api.mealplans.get = (plan_id, done) => {
    
    var mealplan;

    let getMealPlanner = next => {
      lib.mealplans.get(
        plan_id,
        (err, res) => {
          if (err) {
            return done(new Error("Meal plan could not be taken."));
          }
          mealplan = res;
          next();
        }
      )
    };

    async.series([
      getMealPlanner,
    ], (err) => {
      done(err, mealplan);
    });
  };
};
