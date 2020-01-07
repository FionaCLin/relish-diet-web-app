'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.reviews.del = (reviewId, done) => {
    let sql, args;
    
    sql = 'DELETE FROM reviews';

    sql += ' WHERE id = $1';

    args = [reviewId];

    db.queryOne(
      sql,
      args,
      (err, res) => {
        done(err, res);
      });
  };
};
