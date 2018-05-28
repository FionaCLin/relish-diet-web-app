'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.mealplans.add = (attrs, done) => {
    let sql;
    sql = 'INSERT INTO meal_plans';
    sql += ' (title, memberno)';
    sql += ' VALUES';
    sql += ' ($1, $2)';
    sql += ' RETURNING id';
    db.queryOne(
      sql,
      [
        attrs.title,
        attrs.user_id // unit of meas
      ],
      (err, res) => {
        if (err) {
          return done(err);
        }
        lib.mealplans.set(res.id, attrs, done);
      });
  };
};
