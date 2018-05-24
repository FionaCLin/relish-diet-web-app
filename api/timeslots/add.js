"use strict";

var _ = require("lodash");
var async = require("async");

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;


  api.timeslots.add = (attrs, done) => {
    // whitelist attrs
    var keys = [
      "plan_id",
      "recipe_id",
      "day",
      "mealtimes",
      "name",
    ];

    let mealplan;
    let timeslot;

    attrs = _.pick(attrs, keys);

    //check if plan exists.

    let checkPlan = next => {
      lib.mealplans.get(
        attrs.plan_id,
        (err, res) => {
          if (err) return done(new Error("Error fetching plan"));
          if (!res) return done(new Error("Plan does not exist."));
          mealplan = res;
          next();
        }
      )
    }

    let addTimeSlot = next => {
      attrs.meal_type = attrs.mealtimes;
      attrs.name = "test";
      lib.timeslots.add(
        attrs,
        (err, res) => {
          if (err) {
            return done(new Error("Time slot could not be added."));
          }
          timeslot = res;
          next();          
        }
      )
    }


    //TODO: compute the total calories, fat, protein, cabs and upset the recipe
    async.series([
      checkPlan,
      addTimeSlot,
      // printer,
    ], (err, res) => {
      done(err, timeslot);
    });
  };
};
