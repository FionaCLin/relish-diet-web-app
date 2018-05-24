'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.timeslots.add = (attrs, done) => {
    let sql;
    sql = 'INSERT INTO Time_Slots';
    sql += ' (plan_id, recipe_id)';
    sql += ' VALUES';
    sql += ' ($1, $2)';
    sql += ' RETURNING id';
    db.queryOne(
      sql,
      [
        attrs.plan_id,
        attrs.recipe_id
      ],
      (err, res) => {
        if (err) {
          return done(err);
        }
        lib.timeslots.set(res.id, attrs, done);
      });
  };
};
