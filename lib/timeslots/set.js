'use strict';

module.exports = (opts) => {
  var db = opts.db;
  var lib = opts.lib;

  lib.timeslots.set = (timeslot_id, attrs, done) => {
    var keys = [
      'name',
      'day',
      'meal_type'
    ];

    var sql = 'UPDATE timeslots SET ';

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

    f.push(timeslot_id);

    // nothing to do
    if (f.length === 1) {
      return lib.timeslots.get(timeslot_id, done);
    }

    db.query(sql, f, (err) => {
      if (err) {
        return done(err, null);
      }

      return lib.timeslots.get(timeslot_id, done);
    });
  };
};
