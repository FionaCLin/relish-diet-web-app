'use strict';

const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let db = opts.db;

  lib.avatars.del = (avatar_id, done) => {

    let delAsset = (next) => {
      lib.storage.del('avatars/' + avatar_id, next);
    };

    let del = (next) => {
      let sql;

      sql = "DELETE FROM avatars";
      sql += " WHERE id = $1";

      db.queryOne(
        sql,
        [avatar_id],
        next
      );
    };

    async.series([
      delAsset,
      del
    ], (err) => {
      done(err);
    });
  };
};
