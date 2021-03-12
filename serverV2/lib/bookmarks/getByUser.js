'use strict';

module.exports = (opts) => {
  const db = opts.db;
  let lib = opts.lib;

  lib.bookmarks.getByUser = (user_id, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += 'FROM bookmarks WHERE memberno = $1';

    args = [user_id];

    db.query(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
