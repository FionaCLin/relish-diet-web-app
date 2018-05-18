'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {

  const lib = opts.lib;
  cosnt db = opts.db;

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
