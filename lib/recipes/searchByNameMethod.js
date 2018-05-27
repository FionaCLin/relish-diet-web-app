'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.search = (keyword, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM recipes ';
    sql += ' WHERE name ~ $1 OR method ~ $2;';

    db.query(
      sql, [keyword, keyword], (err, res) => {
        done(err, res);
      });
  };
};
