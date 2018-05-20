'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.getByUser = (creatorId, done) => {
    let sql, args;
    sql = 'SELECT i.id as ndbno, i.name, i.uom, i.calories, ';

    sql += 'i.protein, i.cabs, i.fat, ri.amount ';

    sql += 'FROM  recipe_ingredients ri ';

    sql += ' join ingredients i on ri.ingred_id = i.id';

    sql += ' WHERE ri.recipe_id = $1 order by i.ingred_type';

    args = [creatorId];

    db.query(
      'SELECT * FROM recipes WHERE memberno = $1',
      args,
      (err, recipes) => {
        done(err, recipes);
      });
  };
};
