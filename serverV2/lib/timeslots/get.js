'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.timeslots.get = (timeslot_id, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM time_slots';

    sql += ' WHERE id = $1';

    args = [timeslot_id];

    db.queryOne(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
