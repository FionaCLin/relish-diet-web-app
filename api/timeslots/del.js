"use strict";

var _ = require("lodash");
var async = require("async");

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;


  api.timeslots.del = (timeslot_id, done) => {

    let timeslot;

    let delTimeSlot = next => {
      lib.timeslots.del(
        timeslot_id,
        (err, res) => {
          if (err) {
            return done(new Error("Time slot could not be deleted."));
          }
          next();
        }
      )
    }

    //TODO: compute the total calories, fat, protein, cabs and upset the recipe
    async.series([
      delTimeSlot,
      // printer,
    ], (err) => {
      done(err);
    });
  };
};
