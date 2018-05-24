"use strict";

var _ = require("lodash");
var async = require("async");

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;


  api.mealplans.set = (plan_id, attrs, done) => {
    var mealplan;
    var user;
    // whitelist attrs
    var keys = [
      "title",
      "user_id",
      "timeslots"
    ];

    attrs = _.pick(attrs, keys);

    //Validate input fields.

    let checkValid = next => {
      if (typeof attrs.title != 'string') return done(new Error('title is not a string')); //up to this line its not working.
      next();
    };

    let checkUser = next => {
      lib.users.get(attrs.user_id, (err, res) => {
        if (!res) {
          return next(new Error("unknown user"));
        }
        user = res;
        next(err);
      });
    };

    let setMealPlanner = next => {
      lib.mealplans.set(
        plan_id,
        attrs,
        (err, res) => {
          if (err) {
            return done(new Error("Meal plan could not be edited."));
          }
          mealplan = res;
          next();
        }
      )
    };


    //get preexisting time slots
    
    // let addTimeSlots = next => {
    //   attrs.timeslots.forEach(slot => {
    //     slot.plan_id = mealplan.plan_id;
    //     lib.timeslots.add(
    //       slot,
    //       (err, res) => {
    //         if (err) {
    //           return done(new Error("Time slot could not be added."));
    //         }
    //       }
    //     )
    //   })
    //   next();
    // }


    //TODO: compute the total calories, fat, protein, cabs and upset the recipe
    async.series([
      checkValid,
      checkUser,
      setMealPlanner,
      // printer,
    ], (err) => {
      done(err, mealplan);
    });
  };
};
