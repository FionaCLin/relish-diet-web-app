'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.reviews.get = (reviewId, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM reviews';

    sql += ' WHERE id = $1';

    args = [reviewId];

    db.queryOne(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
