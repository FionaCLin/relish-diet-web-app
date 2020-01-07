'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.mealplans.set = (planId, attrs, done) => {
    let keys = [
      'title',
      'calories',
      'cabs',
      'protein',
      'fat',
      'sodium'

    ];

    let sql = 'UPDATE meal_plans SET ';

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

    f.push(planId);

    // nothing to do
    if (f.length === 1) {
      return lib.mealplans.get(planId, done);
    }

    db.query(sql, f, (err) => {
      if (err) {
        return done(err, null);
      }

      return lib.mealplans.get(planId, done);
    });
  };
};
