'use strict';

module.exports = (opts) => {
  let db = opts.db;
  let lib = opts.lib;

  lib.reviews.getByRecipe = (recipeId, done) => {
    let sql, args;

    sql = 'SELECT * ,(';

    sql += ' SELECT username FROM members';

    sql += ' WHERE id = r.memberno) AS user';

    sql += ' FROM reviews r';

    sql += ' WHERE recipe_id = $1 ';

    sql += ' order by create_at ';

    args = [recipeId];

    db.query(
      sql, args, (err, res) => {
        done(err, res);
      });
  };
};
