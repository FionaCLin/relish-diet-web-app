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

    let appendReply = (next) => {
      reviews.every((r) => {
        if (!r.parent) {
          let target = sorted_reviews.find(x => x.id === r.id);
          if (!_.isObject(target) || !target.id === r.id) {
            sorted_reviews.push(r);
          }
        } else {
          let parent = sort_reviews.find(x => (x.id === r.parent));
          if (_.isObject(parent)) {

            parent.reply.push(r);
          }
        }
      });
      console.log(sorted_reviews);
      next()
    };

    async.series([
      getReviews,
      appendReply
    ], (err) => {
      done(err, review);
    });
  };
};
