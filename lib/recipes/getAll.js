'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.get = (done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM recipes';

    args = [recipeId];

    db.queryOne(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
