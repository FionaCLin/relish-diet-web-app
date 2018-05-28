'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.mealplans.del = (planId, done) => {
    let sql, args;
    
    sql = 'DELETE FROM meal_plans';

    sql += ' WHERE id = $1';

    args = [planId];

    db.queryOne(
      sql,
      args,
      (err, res) => {
        done(err, res);
      });
  };
};
