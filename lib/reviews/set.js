'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.reviews.set = (reviewId, attrs, done) => {
    let keys = [
      'content',
      'likes'
    ];

    let sql = 'UPDATE reviews SET ';

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
