'use strict';

var _ = require('lodash');
var async = require('async');
var bcrypt = require('bcrypt');

module.exports = (opts) => {

  var db = opts.db;
  var lib = opts.lib;

  lib.users.setPassword = (user_id, password, done) => {

    var user;
    var hash;

    var get = (next) => {
      lib.users.get(
        user_id, (err, res) => {
          if (err) {
            return next(err);
          }
          user = res;
          next();
        });
    };

    var test = (next) => {
      if (!user) {
        return next(new Error('not-found'));
      }
      next();
    };

    var crypt = (next) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, res) => {
          hash = res;
          next();
        });
      });
    };

    var set = (next) => {
      var sql;
      sql = 'UPDATE users SET';
      sql += ' password = $2';
      sql += ' WHERE id = $1';

      db.queryOne(
        sql, [user_id, hash],
        next
      );
    };

    async.series([
      get, test, crypt, set
    ], (err) => {
      return done(err);
    });

  };
};
