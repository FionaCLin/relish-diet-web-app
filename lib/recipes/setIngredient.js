'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.setIngredient = (recipe_id, ingredient_id, attrs, done) => {
    let keys = [
      'amount'
    ];

    let sql = 'UPDATE recipe_ingredients SET ';

    let f = [];
    let g = [];
    let ix = 1;

    keys.forEach(
      (key) => {
        if (!attrs.hasOwnProperty(key)) {
          return;
        }
        let val = attrs[key];
        f.push(val);
        g.push(key + '=$' + (ix));
        ix++;
      });

    sql += g.join(', ');
    sql += ' WHERE recipe_id=$' + ix;
    ix++;
    f.push(recipe_id);
    sql += ' AND ingredient_id=$' + ix;
    f.push(ingredient_id);

    // nothing to do
    if (f.length === 1) {
      return lib.ingredients.get(ingredient_id, done);
    }


    db.query(sql, f, (err) => {
      if (err) {
        return done(err, null);
      }

      return lib.ingredients.set(ingredient_id, attrs, done);
    });
  };
};
