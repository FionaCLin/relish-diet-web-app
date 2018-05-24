'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.timeslots.set = (timeslot_id, attrs, done) => {
    let keys = [
      'day',
      'meal_type'
    ];

    let sql = 'UPDATE Time_Slots SET ';

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
