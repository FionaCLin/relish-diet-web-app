'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.users.get = (user_id, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM members u ';

    sql += ' WHERE u.id = $1';

    args = [user_id];

    db.queryOne(
      sql, args, (err, res) => {
        if (res) {
          delete res.password;
          delete res.pw_salt;
          delete res.tokenkey;
        }
        done(err, res);
      });
  };
};
