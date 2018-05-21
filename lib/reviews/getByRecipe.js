'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.reviews.getByRecipe = (recipeId, done) => {
    let sql, args;
    let reviews;

    sql = 'SELECT * ';

    sql += ' FROM reviews';

    sql += ' WHERE recipe_id = $1 ';

    sql += ' order by create_at ';

    args = [recipeId];

    db.query(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
