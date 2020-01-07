'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.delIngredient = (recipe_ingredient_id, done) => {
    let sql, args;
    // maybe check before it has no reference from recipe_ingredient
    sql = 'DELETE FROM recipe_ingredients';

    sql += ' WHERE id = $1 ';

    args = [recipe_ingredient_id];

    db.queryOne(
      sql,
      args,
      (err, res) => {
        done(err, res);
      });
  };
};
