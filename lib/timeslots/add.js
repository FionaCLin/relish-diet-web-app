s'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.timeslots.add = (attrs, done) => {
    let sql;
    sql = "INSERT INTO timeslots";
    sql += " (plan_id, recipe_id)";
    sql += " VALUES";
    sql += " ($1, $2)";
    sql += " RETURNING id";
    db.queryOne(
      sql,
      [
        attrs.planId,
        attrs.recipeId // unit of meas
      ],
      (err, res) => {
        if (err) {
          return done(err);
        }
        lib.timeslots.set(res.id, attrs, done);
      });
  };
};
