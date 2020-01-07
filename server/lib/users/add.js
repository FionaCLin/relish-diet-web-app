'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.users.add = (attrs, done) => {
    let sql;
    sql = "INSERT INTO members";
    sql += " (email, username)";
    sql += " VALUES";
    sql += " ($1, $2)";
    sql += " RETURNING id";

    db.queryOne(
      sql, [attrs.email, attrs.username],
      (err, res) => {
        if (err) {
          return done(err);
        }
        lib.users.set(res.id, attrs, done);
      });
  };
};
