'use strict';

module.exports = (opts) => {
  var db = opts.db;
  var lib = opts.lib;

  lib.users.set = (user_id, attrs, done) => {
    var keys = [
      'email',
      'username',
      'birthday',
      'goal',
      'gender',
      'nameGiven',
      'nameFamily',
      'memberno'
    ];

    var sql = 'UPDATE members SET ';

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

    f.push(user_id);

    // nothing to do
    if (f.length === 1) {
      return lib.users.get(user_id, done);
    }

    db.query(sql, f, (err) => {
      if (err) {
        return done(err, null);
      }

      return lib.users.get(user_id, done);
    });
  };
};