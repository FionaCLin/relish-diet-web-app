'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.reviews.add = (user_id, attrs, done) => {
    let sql;
    sql = "INSERT INTO reviews";
    sql += " (recipe_id, memberno, create_at)";
    sql += " VALUES";
    sql += " ($1, $2, $3)";
    sql += " RETURNING id";
    db.queryOne(
      sql,
      [
        attrs.recipe_id,
        user_id,
        Date.now()
      ],
      (err, res) => {
        if (err) {
          return done(err);
        }
        lib.reviews.set(res.id, attrs, done);
      });
  };
};
