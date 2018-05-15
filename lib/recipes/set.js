'use strict';

module.exports = (opts) => {
  var db = opts.db;
  var lib = opts.lib;

  lib.recipes.set = (recipe_id, attrs, done) => {
    var keys = [
      'methord',
      'duration',
      'calories',
      'protein',
      'cabs',
      'fat'
    ];

    var sql = 'UPDATE recipes SET ';

    var f = [];
    var g = [];
    var ix = 1;

    keys.forEach(
      (key) => {
        if (!attrs.hasOwnProperty(key)) {
          return;
        }
        var val = attrs[key];
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
