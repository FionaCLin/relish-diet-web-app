'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.del = (recipe_id, done) => {
    let sql, args;
    
    sql = 'DELETE FROM recipes';

    sql += ' WHERE id = $1';

    args = [recipe_id];

    db.queryOne(
      sql,
      args,
      (err, res) => {
        done(err, res);
      });
  };
};
