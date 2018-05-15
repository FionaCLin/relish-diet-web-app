'use strict';

var _ = require('lodash');
var async = require('async');
var bcrypt = require('bcrypt');

module.exports = (opts) => {

  var db = opts.db;
  var lib = opts.lib;

  lib.users.checkPassword = (user_id, password, done) => {
    var fullUser;
    var getPassword = (next) => {
      var sql = '';
      sql += 'SELECT password FROM members';
      sql += ' WHERE id = $1';

      db.queryOne(
        sql, [user_id], (err, res) => {
          if (err) {
            return next(err);
          }
          if (!res) {
            return next(new Error('invalid'));
          }
          fullUser = res;
          if (!fullUser.password) {
            return next(new Error('invalid'));
          }
          next();
        });
    };

    var compare = (next) => {
      bcrypt.compare(
        password,
        fullUser.password, (err, ok) => {
          if (err) {
            return next(err);
          }
          if (!ok) {
            return next(new Error('invalid'));
          }
          next();
        });
    };

    async.series([
      getPassword,
      compare
    ], (err) => {
      if (err) {
        return done(err);
      }
      done(err, true);
    });
  };

};
