'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {

  let lib = opts.lib;
  let db = opts.db;

  lib.avatars.index = (done) => {

    let sql, args;

    sql = "SELECT *";
    sql += " FROM avatars";

    db.query(
      sql,
      (err, res) => {
        done(err, res);
      });
  };

};
