'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.getDetail = (recipe_id, done) => {
    let sql, args;
    let recipe;
    sql = 'SELECT i.id as ndbno, i.name, i.uom, i.calories, ';

    sql += 'i.protein, i.cabs, i.fat, ri.amount ';

    sql += 'FROM  recipe_ingredients ri ';

    sql += ' join ingredients i on ri.ingred_id = i.id';

    sql += ' WHERE ri.recipe_id = $1 order by i.ingred_type';

    args = [recipe_id];

    db.queryOne(
      'SELECT * FROM recipes WHERE id = $1',
      args,
      (err, res) => {
        if (err || !res) {
          return done(err, res);
        }
        res.sodium = Number(res.sodium);
        res.calories = Number(res.calories);
        res.protein = Number(res.protein);
        res.cabs = Number(res.cabs);
        res.fat = Number(res.fat);
        db.query(
          sql,
          args,
          (err, ingredients) => {
            if (err) {
              done(err, null);
            }
            if (!res) {
              recipe = Object.assign({}, res, { ingredients: [] });
              done(null, recipe);
            }
            ingredients.forEach(res => {
              res.calories = Number(res.calories);
              res.protein = Number(res.protein);
              res.cabs = Number(res.cabs);
              res.fat = Number(res.fat);
              res.amount = Number(res.amount);
            });
            recipe = Object.assign({}, res, { ingredients: ingredients });
            done(err, recipe);
          });
      });
  };
};
