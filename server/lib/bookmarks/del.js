'use strict';

module.exports = (opts) => {
  const db = opts.db;
  const lib = opts.lib;

  lib.bookmarks.del = (bookmark_id, done) => {
    let sql, args;
    
    sql = 'DELETE FROM bookmarks';

    sql += ' WHERE id = $1';

    args = [bookmark_id];

    db.queryOne(
      sql,
      args,
      (err, res) => {
        done(err, res);
      });
  };
};
