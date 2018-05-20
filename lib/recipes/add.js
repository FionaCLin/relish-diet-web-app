'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.add = (attrs, done) => {
    let sql;
    sql = "INSERT INTO recipes";
    sql += " (memberno, name)";
    sql += " VALUES";
    sql += " ($1, $2)";
    sql += " RETURNING id";
    db.queryOne(
      sql,
      [
        attrs.user_id,
        attrs.name
      ],
      (err, res) => {
        if (err) {
          return done(err);
        }
        lib.recipes.set(res.id, attrs, done);
      });
  };
};
