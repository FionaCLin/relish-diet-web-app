"use strict";

var _ = require("lodash");
var async = require("async");

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;


  api.timeslots.getByPlan = (plan_id, done) => {

    var timeslots = [];

    let getTimeslots = next => {
      lib.timeslots.getByPlan(
        plan_id,
        (err, res) => {
          if (err) {
            return done(new Error("Meal plan could not be taken."));
          }
          timeslots = res;
          next();
        }
      )
    };

    async.series([
      getTimeslots,
    ], (err) => {
      done(err, timeslots);
    });
  };
};
