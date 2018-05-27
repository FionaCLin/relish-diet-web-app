'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.recipes.set = (recipe_id, attrs, done) => {
    let keys = [
      'name',
      'method',
      'images',
      'calories',
      'cabs',
      'protein',
      'fat',
      'sodium',
      'rate'
    ];

    let sql = 'UPDATE recipes SET ';

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
    sql += ' WHERE id=$' + ix;

    f.push(recipe_id);

    // nothing to do
    if (f.length === 1) {
      return lib.recipes.get(recipe_id, done);
    }

    db.query(sql, f, (err) => {
      if (err) {
        return done(err, null);
      }

      return lib.recipes.get(recipe_id, done);
    });
  };
};
