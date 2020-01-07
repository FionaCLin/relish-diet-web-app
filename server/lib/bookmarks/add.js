'use strict';

module.exports = (opts) => {
  const db = opts.db;
  const lib = opts.lib;

  lib.bookmarks.add = (user_id, recipe_id, done) => {
    let sql;
    sql = "INSERT INTO bookmarks";
    sql += " (memberno, recipe_id)";
    sql += " VALUES";
    sql += " ($1, $2)";
    sql += " RETURNING id";
    db.queryOne(
      sql,
      [
        user_id,
        recipe_id
      ],
      (err, res) => {
        if (err) {
          return done(err);
        }
        lib.bookmarks.get(res.id, done);
      });
  };
};
