'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.get = (recipeId, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM recipes';

    sql += ' WHERE id = $1';

    args = [recipeId];

    db.queryOne(
      sql, args, (err, res) => {
        if (!res) {
          return done(err, res);
        }

        res.calories = Number(res.calories);
        res.sodium = Number(res.sodium);
        res.protein = Number(res.protein);
        res.cabs = Number(res.cabs);
        res.fat = Number(res.fat);
        done(err, res);
      });
  };
};
