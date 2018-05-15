'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.ingredients.add = (attrs, done) => {
    let sql;
    sql = "INSERT INTO ingredients";
    sql += " (recip_id, name)";
    sql += " VALUES";
    sql += " ($1, $2)";
    sql += " RETURNING id";
    db.queryOne(
      sql, 
      [
        attrs.user_id,
        attrs.name,
      ],
      (err, res) => {
        if (err) {
          return done(err);
        }
        lib.ingredients.set(res.id, attrs, done);
      });
  };
};
