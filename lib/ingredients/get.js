'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.ingredients.get = (ingredient_id, done) => {
    let sql, args;
    sql = 'SELECT id as ndbno, uom, name, ';

    sql += 'cabs, fat, protein, calories ';

    sql += ' FROM ingredients';

    sql += ' WHERE id = $1';

    args = [ingredient_id];

    db.queryOne(
      sql, args, (err, res) => {
        if (err || !res) {
          return done(err, res);
        }
        res.calories = Number(res.calories);
        res.protein = Number(res.protein);
        res.cabs = Number(res.cabs);
        res.fat = Number(res.fat);
        done(err, res);
      });
  };
};
