'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.reviews.add = (attrs, done) => {
    let sql;
    sql = "INSERT INTO reviews";
    sql += " (recipe_id, memberno)";
    sql += " VALUES";
    sql += " ($1, $2)";
    sql += " RETURNING id";
    db.queryOne(
      sql,
      [
        attrs.recipeID,
        attrs.creatorID // unit of meas
      ],
      (err, res) => {
        if (err) {
          return done(err);
        }
        lib.reviews.set(res.id, attrs, done);
      });
  };
};
