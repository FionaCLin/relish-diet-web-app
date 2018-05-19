'use strict';

const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let db = opts.db;

  lib.avatars.getStream = (avatar_id, done) => {
    let avatar, buffer;

    let select = (next) => {
      let sql, args;

      sql = "SELECT * FROM avatars";
      sql += " WHERE id = $1";

      args = [avatar_id];

      db.queryOne(
        sql,
        args,
        (err, res) => {
          avatar = res;
          next(err);
        });
    };

    let get = (next) => {
      if (!avatar) {
        return next();
      }
      lib.storage.get('avatars/' + avatar.id, (err, res) => {
        buffer = res;
        next(err);
      });
    };

    async.series([
      select,
      get
    ], (err) => {
      done(err, buffer);
    });
  };
};
