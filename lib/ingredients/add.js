'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.ingredients.add = (attrs, done) => {
    let sql;
    sql = "INSERT INTO ingredients";
    sql += " (id, name, uom)";
    sql += " VALUES";
    sql += " ($1, $2, $3)";
    sql += " RETURNING id";
    db.queryOne(
      sql,
      [
        attrs.ndbno,
        attrs.name,
        attrs.uom // unit of meas
      ],
      (err, res) => {
        if (err) {
          return done(err);
        }
        lib.ingredients.set(res.id, attrs, done);
      });
  };
};
