'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.getAll = (done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM recipes';


    db.query(
      sql, [], (err, res) => {
        done(err, res);
      });
  };
};
