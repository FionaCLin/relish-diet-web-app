'use strict';

module.exports = (opts) => {
  var db = opts.db;
  var lib = opts.lib;

  lib.users.get = (user_id, done) => {
    var sql, args;
    sql = 'SELECT * ';

    sql += ', (SELECT ARRAY(SELECT up.permission FROM user_permissions up ';
    sql += '   WHERE up.user_id = u.id)) AS permissions ';

    sql += ' FROM users u ';

    sql += ' WHERE u.id = $1';

    args = [user_id];

    db.queryOne(
      sql, args, (err, res) => {
        if (res) {
          delete res.password;
        }
        done(err, res);
      });
  };
};
