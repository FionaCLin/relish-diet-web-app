'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {

  let db = opts.db;
  let lib = opts.lib;

  lib.users.getByUsername = (username, done) => {

    let sql;
    sql = "SELECT id FROM members";
    sql += " WHERE LOWER(username) = LOWER($1)";

    db.queryOne(
      sql, [username], (err, res) => {

        if (err) {
          return done(err);
        }

        if (!res) {
          return done(null, false);
        }

        lib.users.get(res.id, done);
      });

  };

};
