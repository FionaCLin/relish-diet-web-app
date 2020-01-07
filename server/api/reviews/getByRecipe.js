'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  const lib = opts.lib;
  const api = opts.api;

  api.reviews.getByRecipe = (recipe_id, done) => {
    let user, reviews, review;
    let sorted_reviews = [];

    if (!recipe_id || typeof recipe_id !== 'number') {
      return done(new Error('invalid recipe_id'));
    }

    let getReviews = (next) => {
      lib.reviews.getByRecipe(
        recipe_id,
        (err, res) => {
          if (err) {
            next(err);
          }
          reviews = res;
          next();
        });
    };

    async.series([
      getReviews
    ], (err) => {
      done(err, reviews);
    });
  };
};
