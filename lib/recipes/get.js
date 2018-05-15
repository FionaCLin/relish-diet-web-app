'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.get = (recipe_id, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM recipes';

    sql += ' WHERE id = $1';

    args = [recipe_id];

    db.queryOne(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
