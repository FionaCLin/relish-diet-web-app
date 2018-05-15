'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.ingredients.get = (ingredient_id, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM ingredients';

    sql += ' WHERE id = $1';

    args = [ingredient_id];

    db.queryOne(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
