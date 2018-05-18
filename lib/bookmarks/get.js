'use strict';

module.exports = (opts) => {
  const db = opts.db;
  const lib = opts.lib;

  lib.bookmarks.get = (user_id, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM bookmarks';

    sql += ' WHERE memberno = $1';

    args = [user_id];

    db.queryOne(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
