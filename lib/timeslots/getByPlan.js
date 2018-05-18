'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.timeslots.getByPlan = (planId, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM timeslots';

    sql += ' WHERE plan_id = $1';

    args = [planId];

    db.queryOne(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
