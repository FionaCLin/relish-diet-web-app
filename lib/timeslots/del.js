'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.timeslots.del = (timeslot_id, done) => {
    let sql, args;

    sql = 'DELETE FROM Time_Slots';

    sql += ' WHERE id = $1';

    args = [timeslot_id];

    db.queryOne(
      sql,
      args,
      (err, res) => {
        done(err, res);
      });
  };
};
