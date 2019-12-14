'use strict';

const _ = require('lodash');
const async = require('async');
const bcrypt = require('bcrypt');

module.exports = (opts) => {

  let db = opts.db;
  let lib = opts.lib;

  lib.users.checkPassword = (user_id, password, done) => {
    let fullUser;
    let getPassword = (next) => {
      let sql = '';
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

    let compare = (next) => {
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
