'use strict';

module.exports = (opts) => {
  const db = opts.db;
  let lib = opts.lib;

  lib.bookmarks.getByUser = (user_id, done) => {
    let sql, args;
    sql = 'SELECT r.id, recipe_id, ingred_id ';

    sql = 'i.name, ri.amount, i.uom, i.calories, ';

    sql = 'i.protein, i.cabs, i.fat ';

    sql += 'FROM  recipes r join recipe_ingredients ri ';

    sql += ' on r.id = ri.recipe_id';

    sql += ' join ingredients i on ri.ingred_id = i.id';

    sql += ' join bookmarks b on b.recipe_id = r.id';

    sql += ' WHERE b.memberno = $1';

    args = [user_id];

    db.query(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
