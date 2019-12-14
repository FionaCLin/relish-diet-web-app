'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.users.set = (user_id, attrs, done) => {
    let keys = [
      'email',
      'username',
      'birthday',
      'goal',
      'gender',
      'nameGiven',
      'nameFamily',
      'memberno',
      'calories_goal',
      'token',
      'tokenKey'
    ];

    let sql = 'UPDATE members SET ';

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
