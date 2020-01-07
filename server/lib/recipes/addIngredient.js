'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.addIngredient = (recipe_id, ingred_id, amount, done) => {
    let sql, args;

    // maybe check before it has no reference from recipe_ingredient
    sql = 'INSERT INTO recipe_ingredients';
    sql += " (recipe_id, ingred_id, amount)";
    sql += " VALUES";
    sql += " ($1, $2, $3)";
    sql += " RETURNING id";

    args = [recipe_id, ingred_id, amount];
    db.queryOne(
      sql,
      args,
      (err, res) => {
        done(err, res);
      });
  };
};
