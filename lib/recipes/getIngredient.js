'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.ingredients.get = (recipe_id, ingredient_id, done) => {
    let sql, args;
    sql = 'SELECT * ';

    sql += ' FROM  recipes r join recipe_ingredients ir ';

    sql += ' on r.id = ri.recipe_id';

    sql += ' join ingredients i on ir.ingred_id = i.id';

    sql += ' WHERE r.id = $1 and id i._id = $1';

    args = [recipe_id, ingredient_id];

    db.queryOne(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
