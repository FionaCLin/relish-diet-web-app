'use strict';

const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let db = opts.db;

  lib.avatars.delByObject = (object_type, object_id, done) => {

    let avatar;

    let select = (next) => {

      let sql, args;
      sql = "SELECT * FROM avatars";
      sql += " WHERE object_type = $1";
      sql += " AND object_id = $2";

      args = [object_type, object_id];

      db.queryOne(
        sql,
        args, (err, res) => {
          avatar = res;
          next(err);
        });
    };

    let delAsset = (next) => {
      if (!avatar) {
        return next();
      }
      lib.storage.del('avatars/' + avatar.id, next);
    };

    let del = (next) => {

      if (!avatar) {
        return next();
      }

      let sql;
      sql = "DELETE FROM avatars";
      sql += " WHERE id = $1";

      db.queryOne(
        sql, [avatar.id],
        next
      );
    };

    async.series([
      select,
      delAsset,
      del,
    ], (err) => {
      done(err);
    });

  };

};
