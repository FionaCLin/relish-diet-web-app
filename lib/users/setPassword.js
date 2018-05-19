'use strict';

const _ = require('lodash');
const async = require('async');
const bcrypt = require('bcrypt');

module.exports = (opts) => {

  let db = opts.db;
  let lib = opts.lib;

  lib.users.setPassword = (user_id, password, done) => {

    let user;
    let hash;
    
    let get = (next) => {
      lib.users.get(
        user_id, (err, res) => {
          if (err) {
            return next(err);
          }
          user = res;
          next();
        });
      };
      
      let test = (next) => {
        if (!user) {
          return next(new Error('not-found'));
        }
        next();
      };
      
      let crypt = (next) => {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, res) => {
            hash = res;
          next();
        });
      });
    };
    
    let set = (next) => {
      let sql;
      sql = 'UPDATE members SET';
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
