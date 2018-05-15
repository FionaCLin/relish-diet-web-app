'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {

  var db = opts.db;
  var lib = opts.lib;

  lib.users.getByUsername = (username, done) => {

    var sql;
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
