'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.ingredients.del = (recipe_id, ingredient_id, done) => {
    let sql, args;
    // maybe check before it has no reference from recipe_ingredient
    sql = 'DELETE FROM recipe_ingredients';

    sql += ' WHERE recipe_id = $1 and ingred_id';

    args = [recipe_id, ingredient_id];

    db.queryOne(
      sql,
      args,
      (err, res) => {
        done(err, res);
      });
  };
};
