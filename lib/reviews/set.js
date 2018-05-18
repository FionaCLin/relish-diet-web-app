'use strict';

module.exports = (opts) => {
  var db = opts.db;
  var lib = opts.lib;

  lib.reviews.set = (reviewId, attrs, done) => {
    var keys = [
      'content',
      'like',
      'parent'  //reply to which comment
    ];

    var sql = 'UPDATE reviews SET ';

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

    f.push(reviewId);

    // nothing to do
    if (f.length === 1) {
      return lib.reviews.get(reviewId, done);
    }

    db.query(sql, f, (err) => {
      if (err) {
        return done(err, null);
      }

      return lib.reviews.get(reviewId, done);
    });
  };
};
