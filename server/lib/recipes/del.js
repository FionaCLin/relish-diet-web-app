'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.del = (recipeId, done) => {
    let sql, args;
    
    sql = 'DELETE FROM recipes';

    sql += ' WHERE id = $1';

    args = [recipeId];

    db.queryOne(
      sql,
      args,
      (err, res) => {
        done(err, res);
      });
  };
};
