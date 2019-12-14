'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.mealplans.get = (planId, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM meal_plans';

    sql += ' WHERE id = $1';

    args = [planId];

    db.queryOne(
      sql, args, (err, res) => {
        if (err || !res) {
          return done(err, res);
        }
        res.sodium = Number(res.sodium);
        res.calories = Number(res.calories);
        res.protein = Number(res.protein);
        res.cabs = Number(res.cabs);
        res.fat = Number(res.fat);
        done(err, res);
      });
  };
};
