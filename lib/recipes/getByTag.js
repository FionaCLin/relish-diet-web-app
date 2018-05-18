'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.getByTag = (keyword, done) => {
    let sql, args;
    sql = 'SELECT r.id, recipe_id, ingred_id ';

    sql = 'i.name, ri.amount, i.uom, i.calories, ';

    sql = 'i.protein, i.cabs, i.fat ';
    
    sql += 'FROM  recipes r join recipe_ingredients ri ';

    sql += ' on r.id = ri.recipe_id';

    sql += ' join ingredients i on ri.ingred_id = i.id';

    sql += ' WHERE r.id = $1 and name ~ \' $2 \'';

    args = [recipe_id, keyword];

    db.queryOne(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
