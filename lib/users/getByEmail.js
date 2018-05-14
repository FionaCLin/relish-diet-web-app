'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {

  var db = opts.db;
  var lib = opts.lib;

  lib.users.getByEmail = (email, done) => {

    var sql;
    sql = "SELECT id FROM users";
    sql += " WHERE LOWER(email) = LOWER($1)";

    db.queryOne(
      sql, [email], (err, res) => {

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
