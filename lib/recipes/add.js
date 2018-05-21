'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.add = (user_id, attrs, done) => {
    let sql;
    sql = "INSERT INTO recipes";
    sql += " (memberno, name, at)";
    sql += " VALUES";
    sql += " ($1, $2, $3)";
    sql += " RETURNING id";
    db.queryOne(
      sql,
      [
        user_id,
        attrs.name,
        Date.now()
      ],
      (err, res) => {
        if (err) {
          return done(err);
        }
        lib.recipes.set(res.id, attrs, done);
      });
  };
};
