"use strict";

module.exports = opts => {
  let db = opts.db;
  let lib = opts.lib;

  lib.users.get = (identifier, done) => {
    let sql, args;
    sql = "SELECT * ";

    sql += " FROM members u ";

    if (typeof identifier === "number") {
      sql += " WHERE u.id = $1";
    } else {
      sql += " WHERE u.tokenKey = $1";
    }

    args = [identifier];

    db.queryOne(sql, args, (err, res) => {
      if (res) {
        delete res.password;
        delete res.pw_salt;
        delete res.token;
      }
      return done(err, res);
    });
  };
};
