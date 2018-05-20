'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.getDetail = (recipe_id, done) => {
    let sql, args;
    sql = 'SELECT i.id as ndbno, i.name, i.uom, i.calories, ';

    sql += 'i.protein, i.cabs, i.fat, ri.amount ';

    sql += 'FROM  recipe_ingredients ri ';

    sql += ' join ingredients i on ri.ingred_id = i.id';

    sql += ' WHERE ri.recipe_id = $1 order by i.ingred_type';

    args = [recipe_id];

    db.queryOne(
      'SELECT * FROM recipes WHERE id = $1',
      args,
      (err, recipe) => {
        db.query(
          sql,
          args,
          (err, ingredients) => {
            recipe.ingredients = ingredients;
            done(err, recipe);
          })
      });
  };
};
