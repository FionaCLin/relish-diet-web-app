'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  const lib = opts.lib;
  const api = opts.api;

  api.reviews.getByRecipe = (recipe_id, done) => {
    let user, reviews, review;
    let sorted_reviews = [];

    if (!recipe_id || !_.isNumber(recipe_id)) {
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

    let getRootReviews = (next) => {
      reviews.forEach((r) => {
        if (!r.parent) {
          sorted_reviews.push(Object.assign({}, r));
        }
      });
      sorted_reviews.forEach((r) => {
        let index = reviews.indexOf(r);
        reviews.splice(index, 1);
      });
      next();
    };

    let getReplys = (next) => {
      reviews.forEach((r) => {
        console.log(sorted_reviews);
        let parent = sorted_reviews.find(x => x.id === r.parent);
        if (!parent.reply) {
          parent.reply = [];
        }
        parent.reply.push(r);
      });
      next();
    };

    async.series([
      getReviews,
      getRootReviews,
      getReplys
    ], (err) => {
      console.log(8888888888888888, sorted_reviews);
      done(err, sorted_reviews);
    });
  };
};
