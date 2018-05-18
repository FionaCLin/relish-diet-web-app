'use strict';

module.exports = (opts) => {
  var db = opts.db;
  var lib = opts.lib;

  lib.mealplans.set = (planId, attrs, done) => {
    var keys = [
      'title'
    ];

    var sql = 'UPDATE meal_plans SET ';

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
