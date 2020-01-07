'use strict';

const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let db = opts.db;

  lib.avatars.add = (avatar, done) => {
    let clear = (next) => {
      lib.avatars.delByObject(avatar.object_type, avatar.object_id, next);
    };

    let insert = (next) => {
      let sql;
      sql = "INSERT INTO avatars";
      sql += " (at, mime, size, object_type, object_id)";
      sql += " VALUES";
      sql += " ($1, $2, $3, $4, $5)";
      sql += " RETURNING id";

      let args = [
        new Date().getTime(),
        avatar.mime,
        avatar.buffer.length,
        avatar.object_type,
        avatar.object_id
      ];

      db.queryOne(
        sql,
        args, (err, res) => {
          if (err) {
            return next(err);
          }
          avatar.id = res.id;
          next();
        });
    };

    let put = (next) => {
      lib.storage.put('avatars/' + avatar.id, avatar.buffer, next);
    };

    async.series([
      clear,
      insert,
      put
    ], (err) => {
      if (err) {
        return done(err);
      }
      done(null, avatar);
    });
  };
};
