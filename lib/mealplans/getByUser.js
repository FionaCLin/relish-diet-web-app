'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.mealplans.getByUser = (user_id, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM meal_plans';

    sql += ' WHERE memberno = $1';

    args = [user_id];

    db.query(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
