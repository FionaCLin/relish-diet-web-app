'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.reviews.getByRecipe = (recipeId, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM reviews';

    sql += ' WHERE recipe_id = $1';

    sql += ' parent is null or parent = id ';

    sql += ' order by crearte_at ';

    args = [recipeId];

    db.queryOne(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
