'use strict';

module.exports = (opts) => {
  var db = opts.db;
  var lib = opts.lib;

  lib.ingredients.set = (ingredient_id, attrs, done) => {
    var keys = [
      'name',
      'uom',
      'calories',
      'protein',
      'cabs',
      'fat',
      'ingred_type'
    ];

    var sql = 'UPDATE ingredients SET ';

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

    f.push(ingredient_id);

    // nothing to do
    if (f.length === 1) {
      return lib.ingredients.get(ingredient_id, done);
    }

    db.query(sql, f, (err) => {
      if (err) {
        return done(err, null);
      }

      return lib.ingredients.get(ingredient_id, done);
    });
  };
};
